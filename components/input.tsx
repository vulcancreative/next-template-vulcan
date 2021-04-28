import styles from "@styles/input.module.scss";

const Input = ({
  id,
  type,
  label,
  placeholder,
  onChange,
  value,
  className,
  error,
  pattern,
  required
}: IInput) => {
  return (
    <div
      className={`inputGroup ${styles.inputGroup} ${
        className ? `${className}` : ""
      }`}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        pattern={pattern}
        required={required}
      ></input>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

interface IInput {
  id: string;
  type: string;
  label?: string;
  placeholder?: string;
  onChange: any;
  value?: string;
  className?: string;
  required?: boolean;
  error?: string;
  pattern?: string;
}

export default Input;
