import React from 'react';
import {
  faShareNodes,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

import {
  Container, 
  ShareIcon,
  FavoriteIcon
} from './styles';
import ImageView from '../ImageView';
import HeaderLocation from '../HeaderLocation/HeaderLocation';

const ShareProduct = () => {
  return(
    <>
    <Container>
       <ShareIcon icon={faShareNodes} size='lg'  onClick={() => {console.log('cliquei no compartilhar')}}></ShareIcon>
      <FavoriteIcon icon={faHeart} size='lg' onClick={() => {console.log('cliquei no favorito')}}></FavoriteIcon>
    </Container>
    </>
  )
}

export default ShareProduct;