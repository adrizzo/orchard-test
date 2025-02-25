import styled from 'styled-components';

export const SectionContainer = styled.section`
  background-color: #0e1414;
  padding: 0px 147px 120px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 2px;
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    width: 350px;
    background-color: #ffffff;
    margin: 30px auto 0;
  }
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  max-width: 1480px;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;
