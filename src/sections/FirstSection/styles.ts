import { styled } from 'styled-components';

export const IntroContainer = styled.section`
  padding: 147px 120px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1480px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 25px;
  };
`;
