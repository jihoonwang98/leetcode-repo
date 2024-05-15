import { removeDuplicates } from "../src/26-remove-duplicates-from-sorted-array";

describe("removeDuplicates", () => {
  test("removes duplicates from [1, 1, 2]", () => {
    const nums: number[] = [1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  test("removes duplicates from [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]", () => {
    const nums: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  test("handles array with all elements the same", () => {
    const nums: number[] = [7, 7, 7, 7];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([7]);
  });

  test("handles single-element array", () => {
    const nums: number[] = [2];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([2]);
  });

  test("removes duplicates when all elements are negative", () => {
    const nums: number[] = [-3, -3, -2, -1, -1];
    const k = removeDuplicates(nums);
    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([-3, -2, -1]);
  });

  test("removes duplicates with mixed positive and negative numbers", () => {
    const nums: number[] = [-2, -1, -1, 0, 1, 2, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([-2, -1, 0, 1, 2]);
  });

  test("handles array with all unique elements", () => {
    const nums: number[] = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums).toEqual([1, 2, 3, 4, 5]);
  });

  test("removes duplicates with large array size", () => {
    const nums: number[] = new Array(10000)
      .fill(1)
      .map((_, i) => Math.floor(i / 2)); // [0, 0, 1, 1, 2, 2, ..., 4999, 4999]
    const k = removeDuplicates(nums);
    expect(k).toBe(5000);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(i);
    }
  });

  test("removes duplicates with non-sequential elements", () => {
    const nums: number[] = [2, 2, 3, 5, 5, 7, 11, 11, 13];
    const k = removeDuplicates(nums);
    expect(k).toBe(6);
    expect(nums.slice(0, k)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
