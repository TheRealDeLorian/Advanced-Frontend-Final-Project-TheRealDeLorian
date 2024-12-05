import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  
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
      <div className="container">
        {/* <UserSummary/> This component will be a little card-like thing that contains streak info, last temple visited, maybe upcoming visits, etc.  */}
        <div>
          <h2 className="content-center">Edify your temple journey</h2>
        </div>
          <Link to="/new" className="btn btn-secondary " >Click here to start </Link>
      </div>
      <button className="btn btn-danger" onClick={throwError}>Throw Error</button>
    </>
  );
}

