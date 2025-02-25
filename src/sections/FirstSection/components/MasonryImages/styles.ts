import styled from 'styled-components';

export const MasonryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 330px);
  gap: 10px;

  @media (min-width: 320px) and (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const ImageContainer = styled.div<{ isLarge?: boolean }>`
  grid-column: ${(props) => (props.isLarge ? '1' : '2')};
  grid-row: ${(props) => (props.isLarge ? '1 / span 2' : 'auto')};
  height: 100%;
  overflow: hidden;

  @media (min-width: 320px) and (max-width: 720px) {
    grid-column: 1;
    grid-row: auto;
    height: auto;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
