import PoliticaProduto from "../components/DetailsProduct/PoliticaProduto";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar/index";
import ReservaComponent from "../components/ReservaComponent/index";

const Reserva = () => {
    return (
        <div>
            <Navbar />
            <ReservaComponent/>
            <PoliticaProduto/>
            <Footer />
        </div>
    );
};

export default Reserva;