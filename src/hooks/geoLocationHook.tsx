import { useEffect, useState } from "react";

export const useGeoLocation = () => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position);
        },
        (err) => {
          setError(err.message);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      const errorMessage = 'Geolocation is not supported by this browser.';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  return { location, error };
};