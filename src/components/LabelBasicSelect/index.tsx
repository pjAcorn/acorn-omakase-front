import Label from '../styled-components/Label';
import BasicSelect from '../styled-components/BasicSelect';
import styles from './style.module.scss';

interface LabelBasicSelectProps {
    // label: string;
    text: string;
    id: string;
    name: string;
    value: string;
    options: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
    hasError?: boolean;
    errorMessage?: string;
  }
  
  const LabelBasicSelect = (props: LabelBasicSelectProps) => {
    const { text, id, value, name, options, onChange, onBlur, hasError, errorMessage } = props;
    return (
      <div className={styles.FormContainer}>
        {/* <Label htmlFor={label} text={text} /> */}
        <BasicSelect
          id={id}
          value={value}
          name={name}
          onChange={onChange}
          options={options}
          onBlur={onBlur}
          hasError={hasError}
        />
        {hasError ? <span className={styles.error}>{errorMessage}</span> : null}
      </div>
    );
  };
  
  export default LabelBasicSelect;