import React, { useState, useEffect } from "react";
import axios from 'axios';
import apiBaseUrl from "../../api"
import { useParams } from "react-router-dom";

import PoliticaProduto from "../components/DetailsProduct/PoliticaProduto";
import CaracteristicaDescricao from "../components/DetailsProduct/CaracteristicaDescricao";
import HeaderLocation from "../components/DetailsProduct/HeaderLocation/HeaderLocation";
import { StyledEngineProvider } from "@mui/material/styles";
import CalendarB from "../components/DetailsProduct/CalendarB";
import ImageView from "../components/DetailsProduct/ImageView";
import ShareProduct from "../components/DetailsProduct/ShareProduct";
 
const Details = () => {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState();
   
    useEffect(() => {
        
        console.log('id', id);
        console.log(`${apiBaseUrl}/produtos/${id}`);
        const loadProducts = async () => {
            try{
            const response = await axios.get(`${apiBaseUrl}/produtos/${id}`);
           
            //const product = Object.values(response.data.content);
            setProduct(response.data)

            } catch (error) {
                console.error("Error loading product:", error);
            } finally {
                setIsLoading(false);
            }
        }
       
        loadProducts();
       
    }, [])
   
    return (
        <div>
        {!isLoading && product && (
        <div>
            <HeaderLocation product={product}/>
            <ShareProduct product={product}/>
            <ImageView product={product}/>
            <PoliticaProduto product={product}/>
            <CaracteristicaDescricao product={product}/>
            <StyledEngineProvider injectFirst>
                <CalendarB id={id} />
            </StyledEngineProvider>
        </div>
        )}
        </div>
      
    );
};

export default Details;