
import React, { useState, useEffect } from "react";
import axios from 'axios';
import apiBaseUrl from "../../api"
import BodyAccomodation from "../components/BodyAccomodation";
import BodyRecomendation from "../components/BodyRecomendation";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/index";
import "./home.module.css";

const Home = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [cities, setCities] = useState([]);
    const [products, setProducts] = useState({});
    const [categories, setCategories] = useState({});
    const [destination, setDestination] = useState(null);

    const fnChangeDestiny = (destiny) => {
        setDestination(destiny);
    }

    const fnCardClick = (id) => {
        const loadProducts = async () => {
            const response = await axios.get(`${apiBaseUrl}/produtos/categoria/${id}`);

            const productsArray = Object.values(response.data.content);
            setProducts(productsArray)
        }
        loadProducts();
    }
    useEffect(() => {
        if (destination !== null) {
            const loadProducts = async () => {
                const response = await axios.get(`${apiBaseUrl}/produtos/cidade/${destination.id}`);

                const productsArray = Object.values(response.data.content);
                setProducts(productsArray)
            }
            loadProducts();
        }
    }, [destination])


    useEffect(() => {
        const loadCities = async () => {
            const response = await axios.get(`${apiBaseUrl}/cidades`);
            setCities(response.data.content);
        }

        const loadCategories = async () => {
            const response = await axios.get(`${apiBaseUrl}/categorias`);
            const categoriesArray = Object.values(response.data.content);
            setCategories(categoriesArray);
        }

        const loadProducts = async () => {
            const response = await axios.get(`${apiBaseUrl}/produtos`);
            const productsArray = Object.values(response.data.content);
            setProducts(productsArray)
        }
        setIsLoading(true);
        loadCities();
        loadCategories();
        loadProducts();
        setIsLoading(false);
    }, [])

    return (
        <div>
            <Navbar />
            {!isLoading && (
                <>
                    <Header
                        cities={cities}
                        destination={destination}
                        fnChangeDestiny={fnChangeDestiny}
                    />
                    <BodyAccomodation
                        categories={Object.values(categories)}
                        fnCardClick={fnCardClick}
                    />
                    <BodyRecomendation
                        products={Object.values(products)}
                    />
                </>
            )}

            <Footer />
        </div>
    );
};

export default Home;