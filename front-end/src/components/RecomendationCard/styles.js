import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
    background-color: #FFFFFF;
    max-width: 345px;
`;

export const ImageAccomodation = styled.img`
    height: 230px;
    border-radius: 0 0 8px 8px;
    margin-bottom: 1.25rem;
    width: 100%;
`;

export const ContainerDescriptions = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem 1rem 1rem;
`;

export const HeaderDescriptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom:1.25rem;
`;

export const DescriptionOne = styled.div`
     display: flex;
    flex-direction: column;
`;
export const DescriptionTwo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
`;
export const TypeAccomodation = styled.p`
    margin:0;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #383B58;
`;

export const NameAccomodation = styled.p`
    margin:0;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #383B58;
`;

export const NumberAvaliation = styled.span`
    background-color: #383B58;
    color: #f3f1ed;
    padding: 4px 10px;
    border-radius: 10px;
    width: 0.6rem;
    position: absolute;
    right:0;
    top:-5px;
`;
export const DescriptionAvaliation = styled.span`
    color: #383B58;
    text-align: right;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const DistanceDescription = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.25rem;
`;

export const Distance = styled.p`
    margin: 0;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #383b58;
`;

export const LinkMap = styled.a`
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #1dbeb4;
    text-decoration: none;
`;

export const DescriptionAccomodation = styled.p`
    margin:0;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #383b58;
`;