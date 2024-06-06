export class _Node {
    val: number
    neighbors: _Node[]

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val === undefined ? 0 : val);
        this.neighbors = (neighbors === undefined ? [] : neighbors);
    }
}

export const clonedNodes: _Node[] = new Array(101).fill(null);
export const visited: boolean[] = new Array(101).fill(false);

export function dfs(currNode: _Node) {
    const currN = currNode.val;
    const nextNodes = currNode.neighbors;

    visited[currN] = true;

    for(let i = 0 ; i <= nextNodes.length -1; i++) {
        const nextNode = nextNodes[i];
        const nextN = nextNode.val;

        if (clonedNodes[nextN] === null) {
            clonedNodes[nextN] = new _Node(nextN);
        }

        clonedNodes[currN].neighbors.push(clonedNodes[nextN]);

        if(!visited[nextN]) {
            dfs(nextNode);
        }
    }
}

export function cloneGraph(node: _Node | null): _Node | null {
    if(node?.val === undefined || node?.val === null) return null;
    visited.fill(false);

    clonedNodes[node.val] = new _Node(node.val);

    dfs(node);

    return clonedNodes[node.val];
}