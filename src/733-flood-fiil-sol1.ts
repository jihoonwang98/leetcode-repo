function create2DArray<T>(rows: number, cols: number, defaultValue: T): T[][] {
  return Array.from({ length: rows }, () => new Array(cols).fill(defaultValue));
}

const dir: number[][] = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

class Node {
  #r;
  #c;

  constructor(r: number, c: number) {
    this.#r = r;
    this.#c = c;
  }

  getR() {
    return this.#r;
  }

  getC() {
    return this.#c;
  }
}

function bfs(map: number[][], startNode: Node, color: number) {
  const mapR = map.length;
  const mapC = map[0].length;

  const visited: boolean[][] = create2DArray(mapR, mapC, false);
  const queue: Node[] = [];
  const startColor: number = map[startNode.getR()][startNode.getC()];

  queue.push(startNode);
  visited[startNode.getR()][startNode.getC()] = true;
  map[startNode.getR()][startNode.getC()] = color;

  while (queue.length != 0) {
    const popNode = queue.shift()!;

    for (let i = 0; i < 4; i++) {
      const deltaR = dir[i][0];
      const deltaC = dir[i][1];

      const nextR = popNode.getR() + deltaR;
      const nextC = popNode.getC() + deltaC;

      const isNextCoordinateValid =
        nextR >= 0 && nextR < mapR && nextC >= 0 && nextC < mapC;
      if (!isNextCoordinateValid) continue;

      const nextColor = map[nextR][nextC];

      if (startColor == nextColor && !visited[nextR][nextC]) {
        queue.push(new Node(nextR, nextC));
        visited[nextR][nextC] = true;
        map[nextR][nextC] = color;
      }
    }
  }
}

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  bfs(image, new Node(sr, sc), color);
  return image;
}
