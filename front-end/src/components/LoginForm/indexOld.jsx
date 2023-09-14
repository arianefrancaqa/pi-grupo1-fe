import { useNavigate } from "react-router-dom";
import React, {useContext, useState} from "react";
import { Link } from 'react-router-dom';
import "./loginForm.css";
import { AuthContext } from "../../context/AuthContext";

function LoginForm() {
    const navigate = useNavigate();
    const {saveToken, isLoggedIn} = useContext(AuthContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const [errorMessage, setErrorMessage] = useState("");
    
    const database = [
        {
            email: "teste@teste.com",
            password: "123"
        },
        {
            email: "teste2@teste2.com",
            password: "senha2"
        }
    ];
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // const response = await axios
        const response = database.find((user) => user.email === email);
        
        // quando a resposta do servidor for codigo 200, usuario encontrado e token retornado
        // se for 400, usuario ou senha invalidos
        
        if(response) {
            // substituir por token retornado no response
            saveToken("eyJhbGciOiJIUzI1NiJ9.eyJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6InRlc3RlQHRlc3RlLmNvbSIsImV4cCI6MTcwMzk3NDAyMywiaWF0IjoxNjkwNzU0ODIzfQ.ZKxKw0v3N3d1bi_amF0aTeU485f9wjBbETyojf6H0fc")
            navigate("/")
        } else {
            setErrorMessage("Usuario ou senha invalidos");
        }
    }
    
    const renderErrorMessage = () => <div className="error">{errorMessage}</div>
    
    const renderForm = (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email </label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="input-container">
                    <label>Senha </label>
                    <input type="password" name="password" required onChange={(e) => setPassword(e.target.value)}/>
                    {renderErrorMessage()}
                </div>
                <div className="button-container">
                     <button type="submit"> Entrar</button>
                </div>
                <div className="cadastro-container">
                    <p>Ainda não tem uma conta? <Link to="/cadastro"> Registre-se </Link> </p>
                </div>
            </form>   
        </section>
    )
    
    return(
            <div className="login-form">
                <div className="title"> Iniciar sessão</div>
                {isLoggedIn ? <div> Usuário logado com sucesso </div> : renderForm}
            </div>
    )
}


export default LoginForm;