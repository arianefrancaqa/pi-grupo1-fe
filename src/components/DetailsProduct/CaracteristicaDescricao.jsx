import React from "react";
import styles from "./caracteristicaDescricao.module.css";
import {
    faShareNodes,
    faHeart
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CaracteristicaDescricao = ({product}) => {
    
    return(
        <section className={`${styles.containerDescricao}`}>
            <h3>Fique no coração da cidade</h3>
            <div className={`${styles.descricao}`}>
                <p className={`${styles.descricao_p}`}>
                Que tal tirar uns dias para renovar as energias em um lugar tranquilo e próximo à natureza? Então você precisa conhecer o Belo Hotel. Estamos localizados a poucos minutos de uma das principais reservas naturais da região. Aproveite para desfrutar e fazer caminhadas guiadas, sessões de meditação e yoga. Faça a sua reserva e venha descansar conosco! </p>
                <p className={`${styles.descricao_p}`}>
                Melhor localização, melhores preços, melhor café da manhã, quartos confortáveis, wifi gratuito, encontrar o hotel ideal para as suas férias nunca foi tão fácil.  
                </p>
                <p className={`${styles.descricao_p}`}>
                    Venha nos conhecer!
                </p>
            </div>
            <div className={`${styles.caracteristicas_hotel}`}>
                <h4>O que este lugar oferece:</h4>
                <div className={`${styles.caracteristica_opcoes}`}>
                    {product.caracteristicas.map((product_one) => (
                        <>
                         <img src={product_one.icone} alt={product_one.nome} style={{ width: '20px', marginRight: '10px' }} />
                         <p>{product_one.nome}</p>
                         </>
                    ))}
                   
                    {/* <p>Cozinha</p>
                    <p>Estacionamento</p>
                    <p>Televisor</p>
                    <p>Piscina</p>
                    <p>Aceita pets</p>
                    <p>Wifi</p>
                    <p>Ar-condicionado</p>
                    <p>Academia</p> */}
                </div>
            </div>
        </section>
    )
}

export default CaracteristicaDescricao;