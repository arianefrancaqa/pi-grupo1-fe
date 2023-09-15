import {
    faBed,
    faCalendarDays,
    //faCar,
    faPerson,
    //faPlane,
    //faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { Button } from '@mui/material';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Header = ({ type, cities, destination, fnChangeDestiny }) => {

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [destinyOptionselected, setDestinyOptionSelected] = useState();

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } });
    };

    const handleChangeDestiny = (destiny) => {
        setDestinyOptionSelected(destiny)
    }

    const handleSearchDestiny = () => {
        if (destinyOptionselected) {
            fnChangeDestiny(destinyOptionselected);
        }else{
            notifySearchWarn();
        }
    }


    const notifySearchWarn = () => {

        toast.warn("Por favor selecione seu destino desejado !", {
            position: toast.POSITION.TOP_RIGHT,
        });

    };

    console.log('destinyOptionselected', destinyOptionselected);
    return (
        <div className={`${styles.header}`}>
            <div
                className={
                    type === "list" ? "headerContainer listMode" : "headerContainer"
                }
            >
                {/* <div className={`${styles.headerList}`}>
                    <div className={`${styles.headerListItem} active`}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Estadia</span>
                    </div>
                    <div className={`${styles.headerListItem}`}>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Voos</span>
                    </div>
                    <div className={`${styles.headerListItem}`}>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Aluguel de Carros</span>
                    </div>
                    <div className={`${styles.headerListItem}`}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Atrações</span>
                    </div>
                    <div className={`${styles.headerListItem}`}>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Transporte privado</span>
                    </div>
                </div> */}
                {type !== "list" && (
                    <>
                        <h1 className={`${styles.headerTitle}`}>
                            Buscar Ofertas em Hotéis, Casas e muito mais
                        </h1>
                        <div className={`${styles.headerSearch}`}>
                            <div className={`${styles.headerSearchItem}`}>
                                <FontAwesomeIcon icon={faBed} className={`${styles.headerIcon}`} />
                                {/* <input
                                    type="text"
                                    placeholder="Para onde está indo?"
                                    className={`${styles.headerSearchInput}`}
                                    onChange={(e) => setDestination(e.target.value)}
                                /> */}
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    getOptionLabel={(option) => option.nome}
                                    options={cities}

                                    sx={{ width: 300 }}
                                    onChange={(event, newValue) => {
                                        handleChangeDestiny(newValue);
                                        console.log('newValue', newValue)

                                    }}
                                    noOptionsText="Nenhum Destino encontrado"
                                    renderInput={(params) =>
                                        <TextField
                                            color="primary"
                                            variant="filled"
                                            {...params}
                                            label="Selecione o seu destino"

                                        // InputProps={{
                                        //     classes: {
                                        //     root: styles['MuiInputBaseColorPrimary'],
                                        //     input: styles['MuiInputBaseColorPrimary'],
                                        //     },
                                        //   }}
                                        />
                                    }
                                // getOptionSelected={(option, value) => (
                                //     option.id === value.id &&
                                //     option.nome === value.nome &&
                                //     option.pais === value.pais
                                // )}
                                />
                            </div>

                            <div className={`${styles.headerSearchItem}`}>
                                <FontAwesomeIcon icon={faCalendarDays} className={`${styles.headerIcon}`} />
                                <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="headerSearchText"
                                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                                    date[0].endDate,
                                    "dd/MM/yyyy"
                                )}`}</span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                        minDate={new Date()}
                                        rangeColors={`${styles.headerSearchItem}`}
                                        color='#c2185b'
                                    // sx={{ color: '#2b2c2c', fontWeight: 700, }}
                                    />
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className={`${styles.headerIcon}`} />
                                <span
                                    onClick={() => setOpenOptions(!openOptions)}
                                    className="headerSearchText"
                                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                                {openOptions && (
                                    <div className={`${styles.options}`} >
                                        <div className={`${styles.optionItem}`}>
                                            <span className={`${styles.optionText}`}>Adulto</span>
                                            <div className={`${styles.optionCounter}`}>
                                                <button
                                                    disabled={options.adult <= 1}
                                                    className={`${styles.optionCounterButton}`}
                                                    onClick={() => handleOption("adult", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className={`${styles.optionCounterNumber}`}>
                                                    {options.adult}
                                                </span>
                                                <button
                                                    className={`${styles.optionCounterButton}`}
                                                    onClick={() => handleOption("adult", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className={`${styles.optionItem}`} >
                                            <span className={`${styles.optionText}`}>Criança</span>
                                            <div className={`${styles.optionCounter}`}>
                                                <button
                                                    disabled={options.children <= 0}
                                                    className={`${styles.optionCounterButton}`}
                                                    onClick={() => handleOption("children", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className={`${styles.optionCounterNumber}`}>
                                                    {options.children}
                                                </span>
                                                <button
                                                    className={`${styles.optionCounterButton}`}
                                                    onClick={() => handleOption("children", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className={`${styles.optionItem}`}>
                                            <span className={`${styles.optionText}`}>Quarto</span>
                                            <div className={`${styles.optionCounter}`}>
                                                <button
                                                    disabled={options.room <= 1}
                                                    className={`${styles.optionCounterButton}`}
                                                    onClick={() => handleOption("room", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className={`${styles.optionCounterNumber}`}>
                                                    {options.room}
                                                </span>
                                                <button
                                                    className={`${styles.optionCounterButton}`}
                                                    onClick={() => handleOption("room", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={`${styles.headerSearchItem}`}>

                                {/* <button className={`${styles.navButton}`}>Iniciar Sessão</button> */}
                                <Button variant="contained" size="small" className={`${styles.headerBtn}`} onClick={() => { handleSearchDestiny() }}>Buscar</Button>
                                <ToastContainer />
                                {/* <button className={`${styles.headerBtn}`} onClick={handleSearch}>
                                    Buscar
                                </button> */}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
