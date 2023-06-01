import styled from 'styled-components';

interface InputProps {
  htmlFor?: string;
  text?: string;
}

const Label = ({ htmlFor, text }: InputProps) => {
  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>;
};

const StyledLabel = styled.label<InputProps>`
  margin-bottom: 10px;
  font-size: 16px;
`;

export default Label;