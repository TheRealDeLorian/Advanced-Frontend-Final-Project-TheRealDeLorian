import { useState } from "react";
import { NavBar } from "./NavBar";

function App() {
  const [hasError, setHasError] = useState(false);
  const throwError = () => {
    setHasError(true);
  };
  if (hasError) {
    throwError();
    throw new Error("Manually thrown error after button click!");
  }

  return (
    <>
      <div className="row justify-content-center "></div>
      <NavBar></NavBar>
      {/*<button className="btn btn-danger" onClick={throwError}>Throw Error</button>*/}
    </>
  );
}

export default App;
