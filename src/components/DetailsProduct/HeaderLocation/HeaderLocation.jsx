import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

import {
    faLocationDot,
    faStar
} from "@fortawesome/free-solid-svg-icons";

import ArrowLeft from '../../../assets/icons/arrowLeft.png';

import {
    ContainerHeader,
    TypeAccomodation,
    DescriptionAccomodation,
    BtnBack,
    ContainerLocation,
    DescriptionLocation,
    AvaliationLocation,
    TitleLocation,
    LocationIcon,
    ContainerTitleAvaliation,
    TitleAvaliation,
    StarsAvaliation,
    StarIconFilled,
    StarIcon,
    ContainerNumberAvaliation,
    NumberAvaliation
} from './styles';

const HeaderLocation = ({product}) => {

    return (
        <>
            <ContainerHeader>
                <Box>
                    <TypeAccomodation>{product.categoria.description}</TypeAccomodation>
                    <DescriptionAccomodation >{product.nome}</DescriptionAccomodation>
                </Box>
                <Box>
                    <Link to="/"><img width="30x" height="30px" src={ArrowLeft} alt="arrowLeft" /></Link>

                </Box>
            </ContainerHeader>
            <ContainerLocation>
                <Box flex='1'>
                    <Grid container >
                        <Grid item xs={12} sm={9} lg={9}>
                            <DescriptionLocation>
                                <LocationIcon icon={faLocationDot} size="sm" border className="highlight" />
                                <TitleLocation>{product.cidade.nome} - {product.cidade.pais+" "} 
                                    - 940 m para o centro</TitleLocation>
                            </DescriptionLocation>
                        </Grid>

                        <Grid item xs={12} sm={3} lg={3} display={'flex'} justifyContent={'flex-end'}>
                            <AvaliationLocation>
                                <ContainerTitleAvaliation>
                                    <TitleAvaliation>Muito Bom</TitleAvaliation>
                                    <StarsAvaliation>
                                        <StarIconFilled icon={faStar}></StarIconFilled>
                                        <StarIconFilled icon={faStar}></StarIconFilled>
                                        <StarIconFilled icon={faStar}></StarIconFilled>
                                        <StarIconFilled icon={faStar}></StarIconFilled>
                                        <StarIcon icon={faStar}></StarIcon>
                                    </StarsAvaliation>
                                </ContainerTitleAvaliation>
                                <ContainerNumberAvaliation>
                                    <NumberAvaliation>8</NumberAvaliation>
                                </ContainerNumberAvaliation>
                            </AvaliationLocation>
                        </Grid>
                    </Grid>
                </Box>
            </ContainerLocation>
        </>

    )
}

export default HeaderLocation;