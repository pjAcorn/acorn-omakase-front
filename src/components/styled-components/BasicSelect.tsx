import styled from 'styled-components';

interface SelectProps {
  id: string;
  value: string;
  name: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  hasError?: boolean;
}

const Select = ({ id, value, name, options, onChange, onBlur, hasError }: SelectProps) => {
  return (
    <StyledSelect
      id={id}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      hasError={hasError}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select<Pick<SelectProps, 'hasError'>>`
  display: flex;
  width: 240px;
  height: 48px;
  padding: 0 10px;
  margin: 5px 0px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${(props) => (props.hasError ? '#bf0b0b' : '#D9D9D9')};
  font-size: 14px;
`;

export default Select;