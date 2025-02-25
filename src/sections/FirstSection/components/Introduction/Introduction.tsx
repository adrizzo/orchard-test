import React from 'react';
import {
  IntroContent, IntroSubTitle, IntroTitle, IntroWrapper,
} from './styles';
import contentData from '../../../../data/content.json';
import { FirstSectionContent } from '../../../../types/content';

interface IntroductionProps {
  content?: FirstSectionContent;
}

export const Introduction: React.FC<IntroductionProps> = ({
  content = contentData.firstSection,
}) => (
  <IntroWrapper>
    <IntroTitle>{content.title}</IntroTitle>
    <IntroContent>{content.mainContent}</IntroContent>
    <IntroSubTitle isBold>{content.subtitle}</IntroSubTitle>
    <IntroContent isBold>{content.subContent}</IntroContent>
  </IntroWrapper>
);
