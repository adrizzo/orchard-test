import React from 'react';
import { MasonryGrid, ImageContainer, StyledImage } from './styles';

const MasonryImages: React.FC = () => (
  <MasonryGrid>
    <ImageContainer isLarge>
      <StyledImage
        src="/images/intro1.png"
        alt="Introduction image 1"
      />
    </ImageContainer>
    <ImageContainer>
      <StyledImage
        src="/images/intro2.png"
        alt="Introduction image 2"
      />
    </ImageContainer>
    <ImageContainer>
      <StyledImage
        src="/images/intro3.png"
        alt="Introduction image 3"
      />
    </ImageContainer>
  </MasonryGrid>
);

export default MasonryImages;
