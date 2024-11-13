// import { useEffect, useState } from 'react'
import './App.css'
import LoginButton from './LoginButton'
// import { callAuthApiEndpoint, callPublicApiEndpoint } from './services/apiService'
// import { useAuth } from 'react-oidc-context'
import { useGetAllTemplesQuery } from "./hooks/templeHooks";

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

  // const auth = useAuth();
  // useEffect(() => {
  //   callAuthApiEndpoint(auth.user?.id_token ?? "");
  //   callPublicApiEndpoint();
  // }, [auth.user?.id_token]);

 

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

