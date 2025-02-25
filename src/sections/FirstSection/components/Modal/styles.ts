import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #0e1414;
  padding: 20px;
  border-radius: 4px;
  max-width: 90vw;
  max-height: 90vh;
`;

export const CloseButton = styled.button`
position: absolute;
    top: -10px;
    right: -10px;
    background: white;
    border: none;
    color: black;
    font-size: 25px;
    cursor: pointer;
    z-index: 1001;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    text-align: center;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
`;
