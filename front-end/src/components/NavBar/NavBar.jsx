import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styles from "./navBar.module.css"
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const Navbar = () => {
    const { user, isLoggedIn, logout } = useContext(AuthContext);
    async function handleLogout() {
        logout()
    }

    return (
        <div className={`${styles.navbar}`}>
            <div className={`${styles.navContainer}`}>
                <div className={`${styles.logo}`}>
                    <img className={`${styles.logo}`} src="/logoNovoTransilvania-1.png" alt="" />
                </div>

                <div className={`${styles.navItems}`}>
                    {isLoggedIn ? (
                        <>
                            <div className={`${styles.userContainer}`}>
                                <img className={`${styles.avatar}`} src='/user.svg' alt="Avatar" />
                                <span className={`${styles.greeting}`}>Olá, {user}</span>
                            </div>
                            <button className={`${styles.navButton}`} onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/cadastro">
                                {/* <button className={`${styles.navButton}`} >Criar Conta </button> */}
                                <Button variant="contained" size="small">Criar Conta</Button>
                            </Link>

                            <Link to="/login">
                                {/* <button className={`${styles.navButton}`}>Iniciar Sessão</button> */}
                                <Button variant="contained" size="small">Iniciar Sessão</Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Navbar