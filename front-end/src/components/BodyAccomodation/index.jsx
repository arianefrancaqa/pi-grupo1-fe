import { Box, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SearchCard from '../SearchCard';
import axios from 'axios'; 
import apiBaseUrl from "../../../api"

const BodyAccomodation = ({categories, fnCardClick}) => {
    const titleBodyAccomodation = {
        fontFamily: 'Open Sans',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        color: '#2b2c2c',
        marginBottom: '9px',
        marginTop: '5%'
    };

    const fnCardClickTwo = (id) => {
        fnCardClick(id);
        // Adicione a lógica que deseja executar ao clicar no card
      };
    
    useEffect(() => {
        console.log('categories',categories);
    })
    return (
        <Box flex='1' padding="1.5rem" >
            <Typography style={titleBodyAccomodation} variant='h5'>Buscar por tipo de acomodação</Typography>
            <Grid container padding="0 5.37" spacing={1.7}>
               
                {
                    categories.map((category) => (
                    <Grid item xs={12} sm={6} lg={3} key={category.id}>
                        <SearchCard
                            cardId={category.id}
                            cardImage={category.urlImg}
                            cardTitle={category.qualification}
                            cardDescription={'807.101 hóteis'}
                            fnCardClick={fnCardClickTwo}
                        ></SearchCard>
                    </Grid>
                ))}

            </Grid>

        </Box>
    )
}

export default BodyAccomodation;