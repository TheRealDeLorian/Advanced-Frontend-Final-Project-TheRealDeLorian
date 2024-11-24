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
      <NavBar></NavBar>
      <div className="container">
        {/* <UserSummary/> This component will be a little card-like thing that contains streak info, last temple visited, maybe upcoming visits, etc.  */}
        <button className="btn btn-danger ">Click here to start </button>
      </div>
      {/*<button className="btn btn-danger" onClick={throwError}>Throw Error</button>*/}
    </>
  );
}

export default App;
