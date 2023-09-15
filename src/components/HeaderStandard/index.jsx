import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

import {
    faLocationDot,
    faStar
} from "@fortawesome/free-solid-svg-icons";

import ArrowLeft from '../../assets/icons/arrowLeft.png'
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

const HeaderStandard = ({ description }) => {

    return (
        <ContainerHeader>
            <Box>
                {/* <TypeAccomodation>{product.categoria.description}</TypeAccomodation> */}
                <DescriptionAccomodation >{description}</DescriptionAccomodation>
            </Box>
            <Box>
                <Link to="/"><img width="30x" height="30px" src={ArrowLeft} alt="arrowLeft" /></Link>

            </Box>
        </ContainerHeader>


    )
}

export default HeaderStandard;