import styles from "@styles/textarea.module.scss";

const Textarea = ({
  cols,
  id,
  label,
  placeholder,
  rows,
  className,
  error,
  required
}: ITextarea) => {
  return (
    <div
      className={`textareaGroup ${styles.textareaGroup} ${
        className && `${className}`
      }`}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        required={required}
      ></textarea>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

interface ITextarea {
  cols?: number;
  id: string;
  label: string;
  placeholder?: string;
  rows?: number;
  className?: string;
  error?: string;
  required?: boolean;
}

export default Textarea;
