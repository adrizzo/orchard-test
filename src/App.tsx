import React from 'react';
import SecondSection from './sections/SecondSection';
import { GlobalStyle } from './styles';
import FirstSection from './sections/FirstSection';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <FirstSection />
    <SecondSection />
  </>
);

export default App;
