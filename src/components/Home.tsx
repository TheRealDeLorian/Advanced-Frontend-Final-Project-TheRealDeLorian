import LoginButton from '../LoginButton'
import { useGetAllTemplesQuery } from "../hooks/templeHooks";

function App() {
  const templesQuery = useGetAllTemplesQuery();
  const temples = templesQuery.data;

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
    </>
  )
}

export default App

