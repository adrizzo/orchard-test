import styled from 'styled-components';

export const IntroWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-weight: 300;
  justify-content: space-between;
  margin: 0;
`;

export const IntroContent = styled.p<{ isBold?: boolean }>`
  font-size: 21px;
  font-weight: ${(props) => (props.isBold ? '600' : '300')};
  font-stretch: normal;
  line-height: 1.43;
`;

export const IntroTitle = styled.p`
  font-size: 30px;
  line-height: 1.17;
  border-bottom: 1px solid #fff;
  padding-bottom: 30px;
  text-transform: uppercase;
`;

export const IntroSubTitle = styled.p<{ isBold?: boolean }>`
  line-height: 1.43;
  color: red;
  font-size: 15px;
  font-weight: ${(props) => (props.isBold ? '600' : '300')};
  text-transform: uppercase;
`;
