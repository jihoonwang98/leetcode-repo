import {_Node, cloneGraph} from "../src/133-clone-graph";

describe('cloneGraph', () => {
    test('cloneGraph should handle simple connected graph', () => {
        const node1 = new _Node(1);
        const node2 = new _Node(2);
        const node3 = new _Node(3);
        const node4 = new _Node(4);

        node1.neighbors.push(node2, node4);
        node2.neighbors.push(node1, node3);
        node3.neighbors.push(node2, node4);
        node4.neighbors.push(node1, node3);

        const cloned = cloneGraph(node1);

        expect(cloned?.val).toBe(1);
        expect(cloned?.neighbors.length).toBe(2);
        expect(cloned?.neighbors.map(n => n.val).sort()).toEqual([2, 4]);
    });

    test('cloneGraph should handle single node with no neighbors', () => {
        const node1 = new _Node(1);

        const cloned = cloneGraph(node1);

        expect(cloned?.val).toBe(1);
        expect(cloned?.neighbors.length).toBe(0);
    });

    test('cloneGraph should handle an empty graph', () => {
        const cloned = cloneGraph(null);
        expect(cloned).toBe(null);
    });

    test('cloneGraph should handle graph with one node and one neighbor', () => {
        const node1 = new _Node(1);
        const node2 = new _Node(2);

        node1.neighbors.push(node2);
        node2.neighbors.push(node1);

        const cloned = cloneGraph(node1);

        expect(cloned?.val).toBe(1);
        expect(cloned?.neighbors.length).toBe(1);
        expect(cloned?.neighbors[0].val).toBe(2);
    });

    test('cloneGraph should handle a cycle', () => {
        const node1 = new _Node(1);
        const node2 = new _Node(2);

        node1.neighbors.push(node2);
        node2.neighbors.push(node1);

        const cloned = cloneGraph(node1);

        expect(cloned?.val).toBe(1);
        expect(cloned?.neighbors.length).toBe(1);
        expect(cloned?.neighbors[0].val).toBe(2);
        expect(cloned?.neighbors[0].neighbors[0].val).toBe(1);
    });

    test('cloneGraph should handle a complex graph', () => {
        const node1 = new _Node(1);
        const node2 = new _Node(2);
        const node3 = new _Node(3);
        const node4 = new _Node(4);
        const node5 = new _Node(5);

        node1.neighbors.push(node2, node3);
        node2.neighbors.push(node1, node4);
        node3.neighbors.push(node1, node5);
        node4.neighbors.push(node2);
        node5.neighbors.push(node3);

        const cloned = cloneGraph(node1);

        expect(cloned?.val).toBe(1);
        expect(cloned?.neighbors.length).toBe(2);
        expect(cloned?.neighbors.map(n => n.val).sort()).toEqual([2, 3]);
    });

    test('cloneGraph should handle graph with multiple neighbors', () => {
        const node1 = new _Node(1);
        const node2 = new _Node(2);
        const node3 = new _Node(3);
        const node4 = new _Node(4);

        node1.neighbors.push(node2, node3, node4);
        node2.neighbors.push(node1);
        node3.neighbors.push(node1);
        node4.neighbors.push(node1);

        const cloned = cloneGraph(node1);

        expect(cloned?.val).toBe(1);
        expect(cloned?.neighbors.length).toBe(3);
        expect(cloned?.neighbors.map(n => n.val).sort()).toEqual([2, 3, 4]);
    });

    test('cloneGraph should handle disconnected graph', () => {
        const node1 = new _Node(1);
        const node2 = new _Node(2);
        const node3 = new _Node(3);
        const node4 = new _Node(4);

        node1.neighbors.push(node2);
        node2.neighbors.push(node1);
        node3.neighbors.push(node4);
        node4.neighbors.push(node3);

        const cloned = cloneGraph(node1);

        expect(cloned?.val).toBe(1);
        expect(cloned?.neighbors.length).toBe(1);
        expect(cloned?.neighbors[0].val).toBe(2);
    });

    test('cloneGraph should handle large graph', () => {
        const nodes = Array.from({ length: 100 }, (_, i) => new _Node(i + 1));

        for (let i = 0; i < 99; i++) {
            nodes[i].neighbors.push(nodes[i + 1]);
            nodes[i + 1].neighbors.push(nodes[i]);
        }

        const cloned = cloneGraph(nodes[0]);

        expect(cloned?.val).toBe(1);
        expect(cloned?.neighbors[0].val).toBe(2);
        expect(cloned?.neighbors[0].neighbors[0].val).toBe(1);
    });

    test('cloneGraph should handle self-loop node', () => {
        const node1 = new _Node(1);
        node1.neighbors.push(node1);

        const cloned = cloneGraph(node1);

        expect(cloned?.val).toBe(1);
        expect(cloned?.neighbors.length).toBe(1);
        expect(cloned?.neighbors[0].val).toBe(1);
    });

    test("[[2],[1]]", () => {
        const node1 = new _Node(1);
        const node2 = new _Node(2);

        node1.neighbors.push(node2);
        node2.neighbors.push(node1);

        const cloned = cloneGraph(node1);
    })
});
