import React from 'react';
import { ReadMoreReadLess } from "react-readmore-and-readless"
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import {
    Container,
    ImageAccomodation,
    ContainerDescriptions,
    HeaderDescriptions,
    DescriptionOne,
    DescriptionTwo,
    TypeAccomodation,
    NameAccomodation,
    NumberAvaliation,
    DescriptionAvaliation,
    DistanceDescription,
    Distance,
    LinkMap,
    DescriptionAccomodation
} from './styles';

const RecomendationCard = (props) => {

    const {
        id,
        image,
        typeAccomodation,
        quantityStars,
        name,
        numberAvaliation,
        descriptionAvaliation,
        distanceDescription,
        descriptionAccomodation,
        titleButton
    } = props;
    return (
        <Container>
            <ImageAccomodation src={image} />
            <ContainerDescriptions>
                <HeaderDescriptions>
                    <DescriptionOne>
                        <TypeAccomodation>{typeAccomodation}</TypeAccomodation>
                        <NameAccomodation>{name}</NameAccomodation>
                    </DescriptionOne>
                    <DescriptionTwo>
                        <NumberAvaliation>{numberAvaliation}</NumberAvaliation>
                        <DescriptionAvaliation>{descriptionAvaliation}</DescriptionAvaliation>
                    </DescriptionTwo>
                </HeaderDescriptions>
                <DistanceDescription>
                    <Distance>{distanceDescription } </Distance>  <LinkMap href="#"> MOSTRAR NO MAPA</LinkMap>
                </DistanceDescription>
                <ReadMoreReadLess
                    text={descriptionAccomodation}
                    charLimit={90}
                    truncateEllipsis="..."
                    readMoreText="Mais"
                    readLessText="Menos"
                    readMoreClassName="readmore"
                    readLessClassName="readless"
                    rootStyles={{
                       
                      }}
                      readMoreStyle={{
                        background: 'transparent',
                        color: 'purple',
                        border:'none', 
                        marginLeft:'0',
                        padding:'0',
                        fontSize: '16px'
                      }}
                      readLessStyle={{
                        background: 'transparent',
                        color: 'purple',
                        border:'none', 
                        marginLeft:'0',
                        padding:'0',
                        fontSize: '16px'
                      }}
                    
                />
                {/* <DescriptionAccomodation>
                    {descriptionAccomodation}
                </DescriptionAccomodation> */}
                <Link to={`/detalhes_produto/` + id}><Button style={{ marginTop: '1.25rem', width: '100%' }} variant="contained" >{titleButton}</Button></Link>
            </ContainerDescriptions>
        </Container>
    )
}

export default RecomendationCard;