import React from "react";
import styles from "./politicaProduto.module.css";

const PoliticaProduto = () => {
    return(
        <section className={`${styles.containerDetail}`}>
            <h3 className={`${styles.h3Detail}`}>O que você precisa saber:</h3>
            <hr />   
            <div className={`${styles.col_3_detail}`}>
                <div className={`${styles.col_1_detail}`}>
                    <h4 className={`${styles.h4detail}`}>Regras da casa</h4>
                    <p>Check-out: 10:00</p>
                    <p>Não é permitido festas</p>
                    <p>Não fumar</p>
                </div>
                <div className={`${styles.col_1_detail}`}>
                    <h4 className={`${styles.h4detail}`}>Saúde e Segurança</h4>
                    <p>Diretrizes de distanciamento social e outras </p>
                    <p>Detector de fumaça</p>
                    <p>Depósito de segurança</p>
                </div>
                <div className={`${styles.col_1_detail}`}>
                    <h4 className={`${styles.h4detail}`}>Política de cancelamento</h4>
                    <p>Adicione as datas da viagem para obter detalhes de cancelamento para esta estádia</p>
                </div>
            </div>
        </section>
        
    )

}

export default PoliticaProduto