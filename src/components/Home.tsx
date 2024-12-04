import { useEffect, useState } from "react";
import { getUserFromCookie } from "../authentication/getUserFromCookie";
import LoginButton from "./LoginButton";
import { People } from "../data/People";
import { Link } from "react-router-dom";

export const Home = () => {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState<People | undefined>(undefined);
  
  const [hasError, setHasError] = useState(false);
  const throwError = () => {
    setHasError(true);
  };
  if (hasError) {
    throwError();
    throw new Error("Manually thrown error after button click!");
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserFromCookie();
        setCurrentLoggedInUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);
  return (
    <>
      <div className="container">
        {/* <UserSummary/> This component will be a little card-like thing that contains streak info, last temple visited, maybe upcoming visits, etc.  */}
        <div>
          <h2 className="content-center">Edify your temple journey</h2>
        </div>
        {currentLoggedInUser ? (
          <Link to="/new" className="btn btn-secondary " >Click here to start </Link>
        ) : (
          <>
            <span>Click here to </span> <LoginButton />
          </>
        )}
      </div>
      {/*<button className="btn btn-danger" onClick={throwError}>Throw Error</button>*/}
    </>
  );
}

