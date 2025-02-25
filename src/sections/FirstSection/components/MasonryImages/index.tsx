import React, { useState } from 'react';
import { MasonryGrid, ImageContainer, StyledImage } from './styles';
import Modal from '../Modal';
import { ModalImage } from '../Modal/styles';
import contentData from '../../../../data/content.json';

const MasonryImages: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <MasonryGrid>
        {contentData.firstSection.images.map((image, index) => (
          <ImageContainer key={image.alt} isLarge={index === 0}>
            <StyledImage
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(image.src)}
            />
          </ImageContainer>
        ))}
      </MasonryGrid>

      <Modal isOpen={!!selectedImage} onClose={handleCloseModal}>
        <ModalImage src={selectedImage || ''} alt="Selected image" />
      </Modal>
    </>
  );
};

export default MasonryImages;
