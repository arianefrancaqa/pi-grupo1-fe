import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled.div`
  display: flex;
  flex:1;
  justify-content: center;
  align-items: center;
  padding:2%;
  margin-bottom: 30px;
`;

export const SwiperSlider = styled(Swiper)`
  .swiper-button-next,
        .swiper-button-prev {
            border-radius: 50%;
            background-color: #c2185b;
            width: 2.25rem;
            height: 2.25rem;
            margin-top: -2.25rem;

            &::after {
                font-size: 1.125rem;
                font-weight: 900;
                color: white;
            }
        }
  
        .swiper-pagination {
            font-weight: 700;
            color: red;

            &::after {
              color: white;
            }
        }

        .swiper-pagination-bullet-active {
          background-color: white;
        }
`;
export const SwiperSliderContainer = styled.div`
  
  @media(max-width: 600px) {
    max-width: 340px;
    max-height: 220px;
  }

  @media (min-width:601px) and (max-width: 900px) {
    max-width: 590px;
    max-height: 260px;
  }

  @media (min-width:901px) and (max-width: 1200px) {
    max-width: 800px;
    max-height: 420px;
  }

  @media (min-width:1201px) and (max-width: 1366px) {
    max-width: 900px;
    max-height: 500px;
  }

  max-width: 1366px;
  max-height: 613px;

`;

