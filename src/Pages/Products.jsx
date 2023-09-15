import React from 'react';
import ProductsComponent from '../components/ProductsComponent';
import HeaderStandard from '../components/HeaderStandard';
import Header from '../components/Header/Header';
import ResponsiveAppBar from '../components/NavBar';
import Footer from '../components/Footer';

const Products = () => {
    return (
        <>  
            <ResponsiveAppBar />
            <HeaderStandard description="Administração" />
            <ProductsComponent />
            <Footer />
        </>
    )
}

export default Products;
