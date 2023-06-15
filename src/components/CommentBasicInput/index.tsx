import BasicInput from '../styled-components/BasicInput';
import styles from './style.module.scss';

interface LabelBasicInputProps {
  label: string;
  text: string;
  name: string;
  id: string;
  type: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
}

const LabelBasicInput = (props: LabelBasicInputProps) => {
  const {
    label,
    text,
    name,
    id,
    type,
    value,
    onChange,
    onBlur,
    hasError,
    placeholder,
    errorMessage,
    disabled,
  } = props;
  return (
    <div className={styles.FormContainer}>
      <BasicInput
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
      {hasError && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default LabelBasicInput;