import { print2DArray } from "../src/library/functions";
import { changeValue, rotate, traverse } from "../src/prac";

describe("rotate", () => {
  test("rotates a 3x3 matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    rotate(matrix);
    expect(matrix).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  test("rotates a 4x4 matrix", () => {
    const matrix = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    rotate(matrix);
    expect(matrix).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });

  test("rotates a 2x2 matrix", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    rotate(matrix);
    expect(matrix).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });

  test("rotates a 1x1 matrix", () => {
    const matrix = [[1]];
    rotate(matrix);
    expect(matrix).toEqual([[1]]); // Should remain unchanged
  });

  test("rotates a 5x5 matrix", () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    rotate(matrix);
    expect(matrix).toEqual([
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5],
    ]);
  });
});
