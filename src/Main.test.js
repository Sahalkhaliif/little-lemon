import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns available booking times", () => {
  const result = initializeTimes();

  expect(result).toBeInstanceOf(Array);
  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns available booking times for selected date", () => {
  const result = updateTimes([], {
    type: "UPDATE_TIMES",
    date: "2026-09-21",
  });

  expect(result).toBeInstanceOf(Array);
  expect(result.length).toBeGreaterThan(0);
});