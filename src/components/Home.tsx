// import { useState } from "react";
import { Link } from "react-router-dom";
import { useGeoLocation } from "../hooks/geoLocationHook";
// import { findWhichTempleUserIsNear } from "../logic/locationCalculator";
// import { Temple } from "../data/Temple";

export const Home = () => {
  // const [currentTemple, setCurrentTemple] = useState<Temple | undefined>(undefined);

  // const temples: Temple[] = [
  //   {id: 1, templename: 'Salt Lake City', lat: '40.7704381', long: '-111.8918202', mailaddress: '50 N W Temple St, Salt Lake City, UT 84150', photourl: ""},
  //   {id: 2, templename: 'Oquirrh Mountain', lat: '40.5510973', long: '-111.9874258', mailaddress: '11022 4000 W, South Jordan, UT 84009', photourl: ""},
  //   {id: 3, templename: 'Taylorsville', lat: '40.6666244', long: '-111.9542623', mailaddress: '2603 W 4700 S, Salt Lake City, UT 84129', photourl: ""}
  // ]
  
  const {location, error} = useGeoLocation();
  if (error) throw new Error(error);
  if (!location) return <div>Fetching location...</div>;
  
  // useEffect(() =>{
  //   setCurrentTemple(findWhichTempleUserIsNear(`${location.coords.latitude}`, `${location.coords.longitude}`, temples));
  // }, []); 


  return (
    <>
      <div className="container">
        {/* <UserSummary/> This component will be a little card-like thing that contains streak info, last temple visited, maybe upcoming visits, etc.  */}
        <div>
          <h2 className="content-center">Edify your temple journey</h2>
        </div>
        {location ? `It looks like you are near the  Temple` : ""}
          <Link to="/new" className="btn btn-secondary " >Click here to start </Link>
      </div>
    </>
  );
}

