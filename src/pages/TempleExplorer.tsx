import { useEffect, useState } from "react";
import { useGetAllTemplesQuery } from "../hooks/templeHooks";
import { TempleComponent } from "../components/customLayouts/TempleComponent";

export const TempleExplorer = () => {
  const templesQuery = useGetAllTemplesQuery();
  const temples = templesQuery.data;

  useEffect(() => {
    localStorage.setItem("temples", JSON.stringify(temples));
  }, [temples]);

  const [hasError, setHasError] = useState(false);
  const throwError = () => {
    setHasError(true);
  };
  if (hasError) {
    throw new Error("Manually thrown error after button click!");
  }

  if (templesQuery.isLoading) {
    return <div className="">Loading temples...</div>;
  }
  if (!temples) return <h3 className="text-center">Unable to get temples</h3>;

  return (
    <>
    <h3 onClick={throwError}>All Temples</h3>
      <div className="container row justify-content-center">
        {temples.map((temple) => (
          <>
            <div className="col">
              <TempleComponent temple={temple} />
            </div>
          </>
        ))}
      </div>
      {/* <button className="btn btn-danger" onClick={throwError}>
        Throw Error
      </button> */}
    </>
  );
};
