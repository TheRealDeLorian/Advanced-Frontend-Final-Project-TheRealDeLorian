import { useState } from 'react'
import toast from 'react-hot-toast';
import { useGetAllTemplesQuery } from '../../hooks/templeHooks';

export const TempleExplorer = () => {
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
    toast.loading("Loading temples...");
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
