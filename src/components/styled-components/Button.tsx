import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  background?: string;
  color?: string;
  width?: string;
  height?: string;
}

const Button = ({ text, className, onClick, background, color, width, height }: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      color={color}
      width={width}
      height={height}
      background={background}
    >
      {text}
    </StyledButton>
  );
};

Button.defaultProps = {
  background: 'var(--background-btn)',
  color: 'var(--color-btn)',
  width: '100%',
  height: '48px',
};

const StyledButton = styled.button<Omit<ButtonProps, 'text' | 'onClick'>>`
  /*공통 스타일*/
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.color};
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /*크기*/
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 1rem;

  /*색상 */
  background: ${(props) => props.background};
  // background 색상이 흰색이면 hover 기능 x
  &:not(:disabled):not([aria-disabled='true']):hover {
    ${(props) => (props.background === '#fff' ? '' : 'filter: brightness(0.8)')};
  }
`;

export default Button;