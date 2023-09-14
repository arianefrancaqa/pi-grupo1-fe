import React, { useContext, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { StandardTheme } from '../../themes';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import apiBaseUrl from "../../../api";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Hotel Transilvânia
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function LoginForm() {
    const navigate = useNavigate();
    const { saveToken, isLoggedIn } = useContext(AuthContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userData =
    {
        email: email,
        senha: password
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post(`${apiBaseUrl}/api/auth`, userData)
        console.log("Informações enviadas no request:")
        console.log(response);

        if (response.status === 200) {
            setEmail('');
            setPassword('');
            saveToken(response.data.token);
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token);
            navigate("/")
        }
    }

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


    return (
        <ThemeProvider theme={StandardTheme}>

            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#c2185b' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Iniciar Sessão
                        </Typography>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Lembrar senha"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={ifError}
                            >
                                Iniciar Sessão
                            </Button>
                            <ToastContainer />
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Esqueceu a senha?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/cadastro" variant="body2">
                                        {"Ainda não tem conta? Inscreva-se"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}