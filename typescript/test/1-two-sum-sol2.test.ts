import { twoSum2 } from "../src/1-two-sum-sol2";

test("test 1", () => {
  expect(twoSum2([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("test 2", () => {
  expect(twoSum2([3, 2, 4], 6)).toEqual([1, 2]);
});

test("test 3", () => {
  expect(twoSum2([3, 3], 6)).toEqual([0, 1]);
});

test("test 4", () => {
  expect(twoSum2([3, 2, 4, 1], 6)).toEqual([1, 2]);
});
