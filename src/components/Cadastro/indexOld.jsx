import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./cadastro.css";
import { AuthContext } from "../../context/AuthContext";
import apiBaseUrl from "../../../api"
import axios from 'axios';

const CadastroOld = () => {
  const navigate = useNavigate();
  const { saveToken, isLoggedIn, logout } = useContext(AuthContext);

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Informações setadas pelo usuário:")
    console.log(email, firstName, lastName, password, confirmPassword)

    const userData = {
      nome: firstName,
      sobrenome: lastName,
      email: email,
      senha: password
    }

    if (password !== confirmPassword) {
      setErrorMessage("Senhas precisam ser iguais!")
      return
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Por favor, insira um e-mail válido.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("*A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    const response = await axios.post(`${apiBaseUrl}/usuarios`, userData)
    console.log("Informações enviadas no request:")
    console.log(response);


    if (response.status === 201) {
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      //saveToken(response)
      navigate("/")
    } else {
      setErrorMessage("Por favor, tente novamente. A informações estão inválidas.");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <section className="cadastro">
        <h1>Criar conta</h1>
        {!isLoggedIn ? (
          <>
            <form onSubmit={handleSubmit} className="form-cadastro">
              <div className="input-nome-sobrenome">
                <div className="input-container">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  />
                </div>
                <div className="input-container">
                  <label>Sobrenome</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={lastName}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-container">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-container">
                <label>Senha</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-container">
                <label>Confirmar senha</label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {errorMessage && <p>{errorMessage}</p>}
              <div className="button-login">
                <button className="btn" type="submit" > Enviar </button>
                <p>Já tem uma conta? <Link to="/login"> Iniciar sessão. </Link> </p>
              </div>
            </form>
          </>
        ) : (
          <>
            <h1>User is logged in</h1>
            <button onClickCapture={handleLogout}>logout user</button>
          </>
        )}
      </section>
    </>

  );

}

export default Cadastro;

