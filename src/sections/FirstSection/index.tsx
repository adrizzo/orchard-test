import React from 'react';
import { IntroContainer } from './components/styles';
import { Introduction } from './components/Introduction/Introduction';
import MasonryImages from './components/MasonryImages';

const FirstSection: React.FC = () => (
  <IntroContainer>
    <MasonryImages />
    <Introduction />
  </IntroContainer>
);

export default FirstSection;
