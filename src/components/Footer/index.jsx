import React from 'react';

import { Container } from './styles';
import { Grid, Typography, useMediaQuery, IconButton, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconFacebook from '../../assets/icons/icon-facebook.png';
import IconLinkedin from '../../assets/icons/icon-linkedin.png';
import IconInstagram from '../../assets/icons/icon-instragram.png';
import IconTweet from '../../assets/icons/icon-tweet.png';

const Footer = () => {
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
    console.log('isXsScreen', isXsScreen);
    return (
        <>
            <Box flex="1" padding={1.2} alignItems={'center'} justifyContent={'center'} style={{ backgroundColor: '#171616' }}>
                <Grid container >
                    <Grid item xs={10} sm={7}>
                        <Typography color={'#FFFFFF'}>©2023 Hotéis Transilvania</Typography>
                    </Grid>
                    {!isXsScreen && (
                        <Grid container item xs={2} sm={5} spacing={3.75} direction="row"justifyContent={'flex-end'}>
                            <Grid item>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <img width="20x" height="20px" src={IconFacebook} alt="Facebook" />
                                </a>
                            </Grid>
                            <Grid item>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <img width="20px" height="20px" src={IconLinkedin} alt="Linkedin" />
                                </a>
                            </Grid>
                            <Grid item>
                                <a href="https://www.twitter.com/sua_pagina" target="_blank" rel="noopener noreferrer">
                                    <img width="20px" height="20px" src={IconTweet} alt="Twitter" />
                                </a>
                            </Grid>
                            <Grid item>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <img width="20px" height="20px" src={IconInstagram} alt="Instagram" />
                                </a>
                            </Grid>

                            
                        </Grid>
                    )}
                </Grid>
            </Box>
        </>
    );
}

export default Footer;