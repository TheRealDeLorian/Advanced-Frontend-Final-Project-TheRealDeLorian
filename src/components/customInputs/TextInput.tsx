import { useEffect } from "react";
import { InputControl } from "./useInput";

interface Props {
  id: string;
  name: string;
  control: InputControl;
  default: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  regexPattern?: RegExp;
}

const TextInput: React.FC<Props> = ({
  id,
  label,
  name,
  placeholder = "Type here...",
  control,
  default: defaultValue
}) => {
  useEffect(() => {
    control.setValue(defaultValue);
  }, [name]); 

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    control.setValue(e.target.value);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className="form-control m-2 m-2-sm"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={control.value}
        onChange={handleValueChange}
      />
    </>
  );
};

export default TextInput;
