import styled from 'styled-components';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const ContainerHeader = styled.div`
    flex: 1;
    padding: 10px 46px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #c2185b
   
`;

export const TypeAccomodation = styled(Typography)`
    && {
    color: #fff;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #FFF;
}
`;

export const DescriptionAccomodation = styled(Typography)`
 && {
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #FFF;
 }
`;

export const BtnBack = styled.a`

`;

export const ContainerLocation = styled.div`
    flex: 1;
    padding: 10px 46px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background:#F3F1ED;
 
`;

export const DescriptionLocation = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 370px;
`;

export const TitleLocation = styled.p`
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #383B58;
    margin-left: 6px;
`;
export const AvaliationLocation = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LocationIcon = styled(FontAwesomeIcon)`
    color: #545776;
`;

export const ContainerTitleAvaliation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const TitleAvaliation = styled.p`
    color: #383B58;
    text-align: right;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 8px;
`;

export const StarsAvaliation = styled.div`
     margin-right: 8px;
`;
export const StarIconFilled = styled(FontAwesomeIcon)`
    color: #c2185b;
`;

export const StarIcon = styled(FontAwesomeIcon)`
    color:#BEBEBE;
`;
export const ContainerNumberAvaliation = styled.div`
    padding: 8px 16px;
    background-color: #545776;
    border-radius: 10px;;
`;
export const NumberAvaliation = styled.div`
    color:  #FFF;
    text-align: center;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    `;
