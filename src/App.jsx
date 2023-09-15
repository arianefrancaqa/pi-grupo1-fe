import { ThemeProvider } from '@mui/material';
import { StandardTheme } from './themes';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import LoginForm from './components/LoginForm/index';
import Cadastro from './components/Cadastro/index';
import Details from './Pages/Details';
import Reserva from './Pages/Reserva';
import Products from './Pages/Products';

function App() {

  return (
    <ThemeProvider theme={StandardTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/detalhes_produto/:id" element={<Details />} />
          <Route path="/reserva/:id" element={<Reserva />} />
          <Route path="/cadastro-produto" element={<Products />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider >
  )
}

export default App;