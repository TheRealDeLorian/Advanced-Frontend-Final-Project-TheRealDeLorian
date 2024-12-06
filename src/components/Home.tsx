import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGeoLocation } from "../hooks/geoLocationHook";
import { findWhichTempleUserIsNear } from "../logic/locationCalculator";
import { Temple } from "../data/Temple";
import { useGetAllTemplesQuery } from "../hooks/templeHooks";

export const Home = () => {
  const [currentTemple, setCurrentTemple] = useState<Temple | undefined>(undefined);
  
  const templesQuery = useGetAllTemplesQuery();
  const temples = templesQuery.data;

  const { location, error } = useGeoLocation();

  useEffect(() => {
    if (temples) {
      localStorage.setItem("temples", JSON.stringify(temples));
    }
  }, [temples]);
  
  useEffect(() => {
    if (location && temples) {
      const temple = findWhichTempleUserIsNear(
        `${location.coords.latitude}`,
        `${location.coords.longitude}`,
        temples
      );
      setCurrentTemple(temple);
    }
  }, [location, temples]);
  
  if (templesQuery.isLoading) return <div className="">Loading temples...</div>;
  if (error) throw new Error(error);
  if (!temples) return <h3 className="text-center">Unable to get temples</h3>;
  if (!location) return <div>Fetching location...</div>;


  return (
    <>
      <div className="container">
        {/* <UserSummary/> This component will be a little card-like thing that contains streak info, last temple visited, maybe upcoming visits, etc.  */}
        <div>
          <h2 className="content-center">Edify your temple journey</h2>
        </div>
        {currentTemple ? `It looks like you are near the ${currentTemple.templename} Temple. ` : `Coords: ${location.coords.latitude} ${location.coords.longitude}`}
          <Link to="/new" className="btn btn-secondary " >Click here to start </Link>
      </div>
    </>
  );
}

