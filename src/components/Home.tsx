import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGeoLocation } from "../hooks/geoLocationHook";
import { findWhichTempleUserIsNear } from "../logic/locationCalculator";
import { Temple } from "../data/Temple";
import { useGetAllTemplesQuery } from "../hooks/templeHooks";

export const Home = () => {
  const [currentTemple, setCurrentTemple] = useState<Temple | undefined>(
    undefined
  );
  const [userLat, setUserLat] = useState<number>();
  const [userLong, setUserLong] = useState<number>();
  const [spoofMode, setSpoofMode] = useState(false);


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
      if (!spoofMode) {
        setUserLat(location.coords.latitude);
        setUserLong(location.coords.longitude);
      }
      const temple = findWhichTempleUserIsNear(
        `${userLat}`,
        `${userLong}`,
        temples
      );
      setCurrentTemple(temple);
    }
  }, [location, temples, spoofMode]);

  if (error) throw new Error(error);

  const spoofLocation = () => {
    console.log("spoofing location...");
    setSpoofMode(true);
    setUserLat(40.7704381);
    setUserLong(-111.8918202);
  }

  return (
    <>
      <div className="container">
        {/* <UserSummary/> This component will be a little card-like thing that contains streak info, last temple visited, maybe upcoming visits, etc.  */}
        <div>
          <h2 className="content-center">Edify your temple journey</h2>
        </div>
        {currentTemple ? (
          <>
            <div>
              It looks like you are near the {currentTemple.templename} Temple.{" "}
            </div>
            <Link to="/new" state={{temple: currentTemple}} className="btn btn-secondary ">
              Make a new entry
            </Link>
          </>
        ) : (
          <>
            <div>
              You are not near a temple.{" "}
              <Link to="/temples" className="btn btn-info">
                Click here
              </Link>
              to find one to <span onClick={spoofLocation}>visit</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};
