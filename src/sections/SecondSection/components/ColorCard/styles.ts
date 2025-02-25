import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ColorImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ColorTitle = styled.p`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const ColorDescription = styled.p`
  font-size: 21px;
  line-height: 1.5;
  font-weight: 300;
`;
