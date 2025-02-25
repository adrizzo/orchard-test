import React, { useState } from 'react';
import {
  CardContainer,
  ColorImage,
  ColorTitle,
  ColorDescription,
} from './styles';
import Modal from '../../../FirstSection/components/Modal';
import { ModalImage } from '../../../FirstSection/components/Modal/styles';

interface ColorCardProps {
  name: string;
  description: string;
  imageSrc: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ name, description, imageSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    console.log(`Clicked color card: ${name}`);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CardContainer>
        <ColorImage
          src={imageSrc}
          alt={`${name} spoon`}
          onClick={handleImageClick}
        />
        <ColorTitle>{name}</ColorTitle>
        <ColorDescription>{description}</ColorDescription>
      </CardContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalImage src={imageSrc} alt={`${name} spoon`} />
      </Modal>
    </>
  );
};

export default ColorCard;
