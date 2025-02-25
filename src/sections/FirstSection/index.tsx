import React from 'react';
import { IntroContainer } from './styles';
import { Introduction } from './components/Introduction/Introduction';
import MasonryImages from './components/MasonryImages';
import contentData from '../../data/content.json';

const FirstSection: React.FC = () => (
  <IntroContainer>
    <MasonryImages />
    <Introduction content={contentData.firstSection} />
  </IntroContainer>
);

export default FirstSection;
