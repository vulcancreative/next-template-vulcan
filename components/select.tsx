import styles from "@styles/select.module.scss";
import dynamic from "next/dynamic";

const SelectNoSSR = dynamic(() => import("react-select"), { ssr: false });

const customStyles = {
  indicatorSeparator: () => ({
    backgroundColor: "transparent",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
  menu: (provided) => ({
    ...provided,
    border: "1px solid #C1D2E5",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    zIndex: 99999,
    boxShadow: "inset 0px -4px 14px -2px rgb(13 16 32 / 15%)",
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: "10px",
    padding: "9px 0 9px 20px",
    borderColor: state.isFocused ? "#353B55" : "#C1D2E5",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#C1D2E5",
    },
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  option: (provided) => ({
    ...provided,
    padding: "10px 10px 10px 20px",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.isFocused ? "rotate(180deg)" : "none",
  }),
};

const SelectBox = ({
  id,
  label,
  options,
  defaultValue,
  placeholder,
  onChange,
  className,
}: ISelect) => {
  return (
    <div
      className={`selectGroup ${styles.selectGroup} ${
        className && `${className}`
      }`}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <SelectNoSSR
        styles={customStyles}
        id={id}
        name={id}
        options={options}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

interface ISelect {
  id: string;
  name?: string;
  label?: string;
  options: any;
  defaultValue?: any;
  placeholder?: string;
  styles?: any;
  onChange?: any;
  className?: string;
}

export default SelectBox;
