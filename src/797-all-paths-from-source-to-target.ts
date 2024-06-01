export const UNVISITED = 0;
export const VISITED = 1;
export const NULL = -1;

export class PathHistory {
    curr: number;
    prev: number;

    constructor(curr: number, prev: number) {
        this.curr = curr;
        this.prev = prev;
    }
}

export function dfs(n: number, prev: number, graph: number[][], visited: number[], currPath: PathHistory[], paths: number[][], dest: number) {
    visited[n] = VISITED;
    currPath.push(new PathHistory(n, prev));

    if (n === dest) {
        const path: number[] = [];
        for(let i = 0 ; i <= currPath.length -1; i++) {
            path.push(currPath[i].curr);
        }

        paths.push(path);
        return;
    }

    const nodesConnectedToN = graph[n];
    for (let i = 0; i <= nodesConnectedToN.length - 1; i++) {
        const nextNode = nodesConnectedToN[i];

        dfs(nextNode, n, graph, visited, currPath, paths, dest);

        visited[n] = UNVISITED;
        currPath.pop()
    }

}

export function allPathsSourceTarget(graph: number[][]): number[][] {
    const paths: number[][] = [];
    const visited: number[] = new Array(graph.length).fill(UNVISITED);

    dfs(0, NULL, graph, visited, [], paths, graph.length-1);

    return paths;
}