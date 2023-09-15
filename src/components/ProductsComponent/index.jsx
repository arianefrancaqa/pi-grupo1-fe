import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {
    Container,
    TitlePage,
    ContainerForm,
    SubTitlePage,
    ContainerAtribucts
} from './styles';
import { Grid, Box, Autocomplete } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import apiBaseUrl from '../../../api';
import ConfirmationModal from "./ConfirmationModal";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const ProductsComponent = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        navigate("/")
    }

    const [cities, setCities] = useState([]);
    const [categories, setCategories] = useState({});
    const [caracteristicas, setCaracteristicas] = useState({});

    const [propriedade, setPropriedade] = useState("");
    const [categoria, setCategoria] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cidade, setCidade] = useState(null);
    const [descricao, setDescricao] = useState("");
    const [caracteristicaSelected, setCaracteristicaSelected] = useState({});
    const [nome, setNome] = useState("");
    const [icone, setIcone] = useState("");
    const [url, setUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChangeDestiny = (destiny) => {
        setCidade(destiny)
    }

    const handleChangeCategory = (category) => {
        setCategoria(category)
    }

    const handleChangeCaracteristicas = (caracteristicas) => {
        setCaracteristicaSelected(caracteristicas);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Informações setadas pelo usuário:")
        console.log(propriedade, categoria, endereco, cidade, descricao, nome)

        const productData = {
            nome: propriedade,
            descricao: descricao,
            caracteristicas: [{ id: caracteristicaSelected.id, nome: caracteristicaSelected.nome, icone: caracteristicaSelected.icone }],
            imagens: [{ id: 1, titulo: "image 1", url: url }],
            categoria: { id: categoria.id, qualification: categoria.qualification, description: categoria.description, urlImg: categoria.urlImg },
            cidade: { id: cidade.id, nome: cidade.nome, pais: cidade.pais }
        }

        console.log('productData', productData);

        // if (!isValidEmail(email)) {
        //     setErrorMessage("Por favor, insira um e-mail válido.");
        //     return;
        // }

        // if (password.length < 6) {
        //     setErrorMessage("*A senha deve ter pelo menos 6 caracteres.");
        //     return;
        // }
        try {
            const response = await axios.post(`${apiBaseUrl}/produtos`, productData);

            if (response.status === 201) {
                setPropriedade(null);
                setCategoria('');
                setEndereco('');
                setCidade(null);
                setDescricao('');
                setNome('');
                setIcone('');
                setUrl('');
                handleOpen()
               
                console.log('salvei produto');
            }
        }catch(error){
            setErrorMessage("Por favor, tente novamente. A informações estão inválidas.");
            if (axios.AxiosError) {
                notifyErrorWarn()
                console.clear()
            }
            console.log('errorMEssage', errorMessage);
        }
      
        console.log("Informações enviadas no request:")
        console.log(response);


        // if (response.status === 201) {
        //     setPropriedade(null);
        //     setCategoria('');
        //     setEndereco('');
        //     setCidade(null);
        //     setDescricao('');
        //     setNome('');
        //     setIcone('');
        //     setUrl('');
        //     //saveToken(response)
        //     //navigate("/login")
        //     handleOpen()
        //     console.log('salvei produto');
        // } else {
        //     setErrorMessage("Por favor, tente novamente. A informações estão inválidas.");
        //     if (axios.AxiosError) {
        //         notifyErrorWarn()
        //         console.clear()
        //     }
        //     console.log('errorMEssage', errorMessage);
        // }
    };

    const ifError = () => {

        if (axios.AxiosError) {
            notifyErrorWarn()
            console.clear()
        }
    }

    const notifyErrorWarn = () => {

        toast.warn("Dados Inválidos, por favor tente novamente", {
            position: toast.POSITION.TOP_RIGHT,
        });

    };

    useEffect(() => {
        const loadCities = async () => {
            const response = await axios.get(`${apiBaseUrl}/cidades`);
            setCities(response.data.content);
        }

        const loadCategories = async () => {
            const response = await axios.get(`${apiBaseUrl}/categorias`);
            const categoriesArray = Object.values(response.data.content);
            setCategories(categoriesArray);
        }

        const loadCaracteristicas = async () => {
            const response = await axios.get(`${apiBaseUrl}/caracteristicas`);
            const caracteristicasArray = Object.values(response.data.content);
            setCaracteristicas(caracteristicasArray);
        }

        // setIsLoading(true);
        loadCities();
        loadCategories();
        loadCaracteristicas();
        // loadProducts();
        // setIsLoading(false);
    }, [])

    return (
        <Container>
            <TitlePage>Criar Propriedade</TitlePage>
            <ContainerForm>
                <Box component="form" noValidate onSubmit={handleSubmit} >
                    <Grid container spacing={3} columnSpacing={3} >
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="propriedade"
                                label="Nome Propriedade"
                                variant="outlined"
                                name="propriedade "
                                onChange={(e) => setPropriedade(e.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <Autocomplete
                                disablePortal
                                id="categoria"
                                getOptionLabel={(option) => option.qualification}
                                options={categories}
                                onChange={(event, newValue) => {
                                    handleChangeCategory(newValue);
                                }}
                                noOptionsText="Nenhuma categoria encontrada"
                                renderInput={(params) =>
                                    <TextField
                                        fullWidth
                                        color="primary"
                                        variant="outlined"
                                        {...params}
                                        label="Selecione uma categoria"


                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="endereco"
                                name="endereco"
                                label="Endereço"
                                variant="outlined"
                                onChange={(e) => setEndereco(e.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <Autocomplete
                                disablePortal
                                id="cidade"
                                getOptionLabel={(option) => option.nome}
                                options={cities}
                                onChange={(event, newValue) => {
                                    handleChangeDestiny(newValue);

                                    console.log('newValue', newValue)

                                }}
                                noOptionsText="Nenhuma cidade encontrada"
                                renderInput={(params) =>
                                    <TextField
                                        fullWidth
                                        color="primary"
                                        variant="outlined"
                                        {...params}
                                        label="Selecione uma cidade disponível"


                                    />
                                }

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="descricao"
                                name="descricao"
                                label="Descrição"
                                variant="outlined"
                                onChange={(e) => setDescricao(e.target.value)}
                            />

                        </Grid>
                    </Grid>

                    <SubTitlePage>Adicionar Atributos</SubTitlePage>
                    <ContainerAtribucts>
                        <Grid container spacing={3} columnSpacing={3} >
                            <Grid item xs={11}>
                                <Autocomplete
                                    disablePortal
                                    id="caracteristicas"
                                    getOptionLabel={(option) => option.nome}
                                    options={caracteristicas}
                                    onChange={(event, newValue) => {
                                        handleChangeCaracteristicas(newValue);
                                    }}
                                    noOptionsText="Nenhuma caracteristica encontrada"
                                    renderInput={(params) =>
                                        <TextField
                                            fullWidth
                                            color="primary"
                                            variant="outlined"
                                            {...params}
                                            label="Selecione uma caracteristica"
                                        />
                                    }
                                />

                            </Grid>
                            <Grid item xs={1}>
                                <Button variant="contained">Novo</Button>
                            </Grid>
                        </Grid>
                    </ContainerAtribucts>
                    <SubTitlePage>Carregar Imagens</SubTitlePage>
                    <ContainerAtribucts>
                        <Grid container spacing={3} columnSpacing={3} >
                            <Grid item xs={11}>
                                <TextField
                                    fullWidth
                                    id="url"
                                    name="url"
                                    label="Url Imagem"
                                    variant="outlined"
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <Button variant="contained">Novo</Button>
                            </Grid>
                        </Grid>
                    </ContainerAtribucts>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        // onClick={ifError}
                    >
                        Cadastrar
                    </Button>
                </ Box>
                <ToastContainer />
            </ContainerForm>
            <ConfirmationModal
                open={open}
                fnSetOpen={handleOpen}
                fnSetClose={handleClose}
            />
        </Container>
    )
}

export default ProductsComponent;
