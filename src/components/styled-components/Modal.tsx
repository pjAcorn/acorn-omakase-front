import { ReactNode } from 'react';
import styled from 'styled-components';

interface ModalProps {
  children?: ReactNode;
  background?: string;
  width?: string;
  height?: string;
}

const Modal = ({ children, background, width, height }: ModalProps) => {
  return (
    <StyledLayer>
      <StyledModal background={background} width={width} height={height}>
        {children}
      </StyledModal>
    </StyledLayer>
  );
};

const StyledLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

const StyledModal = styled.div<ModalProps>`
  /*공통 스타일*/
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  transform: translateX(-50%) translateY(-50%);
  color: #929292;
  h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
  }
`;

export default Modal;