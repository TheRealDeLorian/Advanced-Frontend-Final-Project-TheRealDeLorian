import {Visit} from "../src/data/Visit"
import {expect, test} from 'vitest'
import {isWithinPoint2MilesOfTemple} from '../src/logic/locationCalculator'

//This test was written by an AI model, but the inputs were manually verified by a human by typing them into Google maps
test("check coordinates within ±0.2 miles of the temple", () => {
  const templeLat = "40.5510973";
  const templeLong = "-111.9871472";

  const testCases = [
    {
      userLat: "40.5510973", //the exact coordinates of the temple
      userLong: "-111.9871472",
      expected: true,
    },
    {
      userLat: "40.5514000", // Within 0.2 miles
      userLong: "-111.9850000",
      expected: true,
    },
    {
      userLat: "40.5515000", // Exactly 0.2 miles away
      userLong: "-111.9855000",
      expected: true,
    },
    {
      userLat: "40.5519413",
      userLong: "-111.9806331",
      expected: false, // More than 0.2 miles away
    },
    {
      userLat: "40.5500000", // Much more than 0.2 miles away 
      userLong: "-111.9750000",
      expected: false,
    },
  ];

  testCases.forEach(({ userLat, userLong, expected }) => {
    const result = isWithinPoint2MilesOfTemple(userLat, userLong, templeLat, templeLong);
    expect(result).toEqual(expected);
  });
});