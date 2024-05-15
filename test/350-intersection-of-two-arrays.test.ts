import { intersect } from "../src/350-intersection-of-two-arrays";

describe("intersect", () => {
  test("finds intersection of two arrays with duplicates", () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
  });

  test("finds intersection of arrays with non-overlapping elements", () => {
    expect(intersect([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  test("finds intersection of arrays with unique elements", () => {
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual(
      expect.arrayContaining([4, 9])
    );
  });

  test("works with one empty array", () => {
    expect(intersect([], [1, 2, 3])).toEqual([]);
  });

  test("works with both arrays empty", () => {
    expect(intersect([], [])).toEqual([]);
  });

  test("handles arrays with one element", () => {
    expect(intersect([1], [1])).toEqual([1]);
  });

  test("handles large arrays", () => {
    const arr1 = new Array(1000).fill(1);
    const arr2 = new Array(1000).fill(1);
    expect(intersect(arr1, arr2)).toEqual(arr1);
  });

  test("handles arrays with negative numbers", () => {
    expect(intersect([-1, -2, -3], [-3, -4, -5])).toEqual([-3]);
  });

  test("handles arrays where one is a subset of the other", () => {
    expect(intersect([1, 2], [1, 1, 2, 2])).toEqual([1, 2]);
  });

  test("handles arrays with zero", () => {
    expect(intersect([0, 1, 2, 3], [0, 0, 1])).toEqual([0, 1]);
  });
});
