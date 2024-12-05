import {expect, test} from 'vitest'
import {findWhichTempleUserIsNear} from '../src/logic/locationCalculator'
import { Temple } from '../src/data/Temple';

test("if you're near a certain temple, function returns the temple. If no temple, return undefined", () => {
  const temples: Temple[] = [
    {id: 1, templename: 'Salt Lake City', lat: '40.7704381', long: '-111.8918202', mailaddress: '50 N W Temple St, Salt Lake City, UT 84150', photourl: ""},
    {id: 2, templename: 'Oquirrh Mountain', lat: '40.5510973', long: '-111.9874258', mailaddress: '11022 4000 W, South Jordan, UT 84009', photourl: ""},
    {id: 3, templename: 'Taylorsville', lat: '40.6666244', long: '-111.9542623', mailaddress: '2603 W 4700 S, Salt Lake City, UT 84129', photourl: ""}
  ]

  const userLat = "40.666705"; //The roundabout just west of the temple
  const userLong = "-111.956057";

  const userLat2 = "40.769781"; //Temple Square just south of the temple
  const userLong2 = "-111.892281";

  expect(findWhichTempleUserIsNear(userLat, userLong, temples)).toEqual(temples[2])//Should be Taylorsville
  expect(findWhichTempleUserIsNear(userLat2, userLong2, temples)).toEqual(temples[0]) //Should be Salt Lake


});