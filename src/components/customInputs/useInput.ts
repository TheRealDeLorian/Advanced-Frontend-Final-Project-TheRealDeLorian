import { useState} from "react";

export interface InputControl {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>;
  // error: string,
}

export const useInput = (
  startingValue: string = "",
  // getErrorMessage: (value: string) => string
) => {
  const [value, setValue] = useState(startingValue)
  // const [error, setError] = useState("")

  // useEffect (() => {
  //   setError(getErrorMessage(value));
  // }, [getErrorMessage, value])
  return {
    value,
    setValue,
    // error,
  }
}