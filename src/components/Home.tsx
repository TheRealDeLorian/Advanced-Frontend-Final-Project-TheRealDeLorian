import { useState } from 'react';
import LoginButton from '../LoginButton'
import { useGetAllTemplesQuery } from "../hooks/templeHooks";

function App() {
  const templesQuery = useGetAllTemplesQuery();
  const temples = templesQuery.data;
  const [hasError, setHasError] = useState(false);
  const throwError = () => {
    setHasError(true);
  };
  if (hasError) {
    throw new Error("Manually thrown error after button click!");
  }

  if (templesQuery.isLoading) {
    return (
      <div className="">
        loading...
      </div>
    );
  }
  if (!temples)
    return <h3 className="text-center">Unable to get temples</h3>;

  return (
    <>
       <div className="row justify-content-center">
        <LoginButton></LoginButton>
        {temples.map((temple) => (
          <div className="col-lg-2 col-5 m-1 rounded" key={temple.id}>
            {temple.name}
          </div>
        ))}
      </div>
      <button className="btn btn-danger" onClick={throwError}>Throw Error</button>
    </>
  )
}

export default App

