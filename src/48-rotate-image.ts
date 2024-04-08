/**
 Do not return anything, modify matrix in-place instead.
 */

const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

export function traverse(
  matrix: number[][],
  startR: number,
  startC: number,
  n: number
): number[] {
  const result = [];

  let currR = startR;
  let currC = startC;

  if (currC == n - 1 - startC) {
    return [matrix[startR][startC]];
  }

  while (1) {
    result.push(matrix[currR][currC]);
    currR += dir[0][0];
    currC += dir[0][1];
    if (currC === n - 1 - startC) break;
  }

  while (1) {
    result.push(matrix[currR][currC]);
    currR += dir[1][0];
    currC += dir[1][1];
    if (currR === n - 1 - startR) break;
  }

  while (1) {
    result.push(matrix[currR][currC]);
    currR += dir[2][0];
    currC += dir[2][1];
    if (currC === 0 + startC) break;
  }

  while (1) {
    result.push(matrix[currR][currC]);
    currR += dir[3][0];
    currC += dir[3][1];
    if (currR === 0 + startR) break;
  }

  for (let i = 1; i <= n - 1 - startR - startR; i++) {
    const lastElem = result.pop() as number;
    result.unshift(lastElem);
  }

  return result as number[];
}

export function changeValue(
  matrix: number[][],
  startR: number,
  startC: number,
  n: number,
  traverse: number[]
) {
  let traverseIdx = 0;
  let currR = startR;
  let currC = startC;

  if (currC == n - 1 - startC) {
    return;
  }

  while (1) {
    matrix[currR][currC] = traverse[traverseIdx++];
    currR += dir[0][0];
    currC += dir[0][1];
    if (currC === n - 1 - startC) break;
  }

  while (1) {
    matrix[currR][currC] = traverse[traverseIdx++];
    currR += dir[1][0];
    currC += dir[1][1];
    if (currR === n - 1 - startR) break;
  }

  while (1) {
    matrix[currR][currC] = traverse[traverseIdx++];
    currR += dir[2][0];
    currC += dir[2][1];
    if (currC === 0 + startC) break;
  }

  while (1) {
    matrix[currR][currC] = traverse[traverseIdx++];
    currR += dir[3][0];
    currC += dir[3][1];
    if (currR === 0 + startR) break;
  }
}

export function rotate(matrix: number[][]): void {
  const n = matrix.length;
  const until = n % 2 === 0 ? n / 2 - 1 : Math.floor(n / 2);

  for (let i = 0; i <= until; i++) {
    const traversed = traverse(matrix, i, i, n);
    changeValue(matrix, i, i, n, traversed);
  }
}
