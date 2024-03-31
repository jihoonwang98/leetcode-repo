export function create2DArray<T>(
  rows: number,
  cols: number,
  defaultValue: T
): T[][] {
  return Array.from({ length: rows }, () => new Array(cols).fill(defaultValue));
}

export function print2DArray<T>(arr: T[][]) {
  const row = arr.length;
  const col = arr[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      process.stdout.write(arr[i][j] + " ");
    }
    process.stdout.write("\n");
  }
}
