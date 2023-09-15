import { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import RecomendationCard from '../RecomendationCard';

const BodyRecomendation = ({ products }) => {
    const titleBodyRecomendation = {
        fontFamily: 'Open Sans',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        color: '#383B58',
        marginBottom: '9px'
    };

    useEffect(() => {
        console.log('products', Array.isArray(products));
    }, [])
    return (
        <Box flex='1' padding="1.5rem" style={{ backgroundColor: '#DFE4EA' }}>
            <Typography style={titleBodyRecomendation} variant='h5'>Recomendações</Typography>

            {products.length > 0 ? (
                <Grid container padding="0 5.37" spacing={1.7}>
                    {products.map((hotel, index) => (
                        <Grid item key={index} xs={12} sm={6} lg={3}>
                            <RecomendationCard
                                id={hotel.id}
                                image={hotel.imagens.length > 0 ? hotel.imagens[0].url : null}
                                typeAccomodation={String(hotel.categoria.qualification)} // Convertendo para string
                                quantityStars="5"
                                name={String(hotel.nome)}
                                numberAvaliation="8"
                                descriptionAvaliation="Muito Bom"
                                distanceDescription="A 940 m do centro - "
                                descriptionAccomodation={hotel.descricao}
                                titleButton="Ver Mais"
                            />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <p style={{ textAlign: 'center', color: 'black' }}>Nenhum produto disponível para esta seleção</p>
            )}
           
        </Box>
    )
}

export default BodyRecomendation;