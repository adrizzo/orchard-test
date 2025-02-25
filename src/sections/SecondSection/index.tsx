import React from 'react';
import { SectionContainer, Title, CardsContainer } from './styles';
import ColorCard from './components/ColorCard';
import contentData from '../../data/content.json';

const SecondSection: React.FC = () => (
  <SectionContainer>
    <Title>{contentData.secondSection.title}</Title>
    <CardsContainer>
      {contentData.secondSection.colors.map((color, index) => (
        <ColorCard
          key={color.name}
          name={color.name}
          description={color.description}
          imageSrc={`/images/color${index + 1}.png`}
        />
      ))}
    </CardsContainer>
  </SectionContainer>
);

export default SecondSection;
