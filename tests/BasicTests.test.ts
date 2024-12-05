import {Visit} from "../src/data/Visit"
import {expect, test} from 'vitest'

test("creates a visit", () => {
  const visit: Visit = {
    id: 1,
    note: "Loved the experience",
    templeid: 1,
    visittime: new Date(2024, 11, 4, 6, 28, 0)
  };

  
})