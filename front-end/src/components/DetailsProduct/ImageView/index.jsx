import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import "./ImageView.scss";
import casa2 from '../../../assets/images/casa-2.webp';
import casa3 from '../../../assets/images/casa-3.webp';
import casa4 from '../../../assets/images/casa-4.webp';


import {
    Container,
    SwiperSlider,
    SwiperSliderContainer
} from './styles';

const ImageView = ({product}) => {

  const {imagens} = product;
 console.log('imagens', imagens);
  // const slides =[casa2, casa3, casa4];
  const slides = imagens.map(imagem => imagem.url);

    return (
      <Container>
        <SwiperSliderContainer>
          <SwiperSlider
            modules={[Navigation, Pagination, Scrollbar]}
            navigation
            pagination={{ clickable: true }}
            loop
          >
            {slides.map(slide => (
              <SwiperSlide>
                <img src={slide} alt={slides} style={{width:'100%',  maxHeight:'550px'}}/>
                </SwiperSlide>
            ))}
          </SwiperSlider>
        </SwiperSliderContainer>
    </Container>
    )
}

export default ImageView;