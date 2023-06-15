import styled from 'styled-components';

interface InputProps {
  name: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

const BasicInput = ({
  name,
  id,
  type,
  value,
  onChange,
  onBlur,
  hasError,
  placeholder,
  disabled,
}: InputProps) => {
  return (
    <div className='BasicInput'>
      <StyledInput
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        hasError={hasError}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

const StyledInput = styled.input<Pick<InputProps, 'hasError'>>`
  display: flex;
  width: 710px;
  height: 48px;
  padding: 0 10px;
  margin: 5px 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${(props) => (props.hasError ? '#bf0b0b' : '#D9D9D9')};
  font-size: 14px;
`;

export default BasicInput;