import styled from 'styled-components';

export const ServicesWrapper = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #010606;
  color: #fff;
  @media screen and (max-width: 768px){
    height: 1100px;
  }
  @media screen and (max-width: 480px){
    height: 1200px;
  }
`;
export const ServicesHeading = styled.h2`
  font-size: clamp(2rem, 4vw, 4rem);
  text-align: center;
  padding: 10px 0;
  margin-bottom: 64px;

  

`;
export const ServicesContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: centet;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ServicesCard = styled.div`
  display: flex;
  background: #fff;
  color: #000;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
  transition: all .3s ease-in;
  cursor: pointer;
  &:hover{
    transform: scale(1.02);
  }
`;
export const ServicesIcon = styled.img`
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
`;
export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 16px;
  @media screen and (max-width: 480px){
    font-size: 1.5rem;
  }
`;
export const ServicesP = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;