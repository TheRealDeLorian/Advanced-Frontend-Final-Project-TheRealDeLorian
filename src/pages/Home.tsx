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
      console.log(`Your coords: ${location.coords.latitude}, ${location.coords.longitude}`);
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
    setUserLat(40.666668);
    setUserLong(-111.954421);
  };

  return (
    <>
      <div className="container" style={{ display: "flex", marginTop: "4rem" }}>
        <div style={{ flex: 1 }}>
          <div>
            <h1
              className="content-center slide-down"
              style={{ fontSize: "4rem", fontWeight: "bold" }}
            >
              Edify your temple journey
            </h1>
            <h3>See the temple</h3>
            <h3>Go inside</h3>
            <h3>Save the memories</h3>
          </div>
          {currentTemple ? (
            <>
              <div>
                It looks like you are near the {currentTemple.templename}{" "}
                Temple.{" "}
              </div>
              <Link
                to="/new"
                state={{ temple: currentTemple }}
                className="btn btn-secondary "
              >
                Make a new journal entry
              </Link>
            </>
          ) : (
            <>
              <div>
                You are not near a temple. <Link to="/temples">Click here</Link>{" "}
                to find one to <span onClick={spoofLocation}>visit</span>
              </div>
            </>
          )}
        </div>
        <div style={{ flex: 1, position: "relative" }}>
          <img
            src={
              currentTemple
          ? currentTemple.photourl
          : "https://upload.wikimedia.org/wikipedia/commons/9/93/Salt_Lake_Temple%2C_Utah_-_Sept_2004-2.jpg"
            }
            alt="Temple"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: 1,
              transition: "opacity 1s ease-in-out",
            }}
          />
        </div>
      </div>
      <style>{`
      .slide-down {
        animation: slideDown 1s ease-out;
      }

      @keyframes slideDown {
        from {
        transform: translateY(-20px);
        opacity: 0;
        }
        to {
        transform: translateY(0);
        opacity: 1;
        }
      }
      `}</style>
    </>
  );
};
