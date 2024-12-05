import { Temple } from "../data/Temple";

export const isWithinPoint2MilesOfTemple = (
  userLat: string, 
  userLong: string, 
  templeLat: string, 
  templeLong: string
): boolean => {
  const R = 3958.8; // Radius of Earth in miles

  const lat1 = toRadians(userLat);
  const lon1 = toRadians(userLong);
  const lat2 = toRadians(templeLat);
  const lon2 = toRadians(templeLong);

  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + 
            Math.cos(lat1) * Math.cos(lat2) * 
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in miles

  return distance <= 0.2; // Check if the distance is within 0.2 miles
};

const toRadians = (degree: string): number => {
  return (parseFloat(degree) * Math.PI) / 180;
};

export const findWhichTempleUserIsNear = (
  userLat: string, 
  userLong: string, 
  temples: Temple[]
): Temple | undefined => {
  return temples.find(temple => 
    isWithinPoint2MilesOfTemple(userLat, userLong, temple.lat, temple.long)
  );
}


