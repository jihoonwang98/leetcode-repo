import { ListNode, LinkedList } from '../src/141-linked-list-cycle';

describe('LinkedList hasCycle method', () => {
    test('detects no cycle in a list with one node', () => {
        const node = new ListNode(1, null);
        const list = new LinkedList(node);
        expect(list.hasCycle()).toBe(false);
    });

    test('detects no cycle in a list with multiple nodes', () => {
        const node3 = new ListNode(3, null);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        const list = new LinkedList(node1);
        expect(list.hasCycle()).toBe(false);
    });

    test('detects a cycle in a list with a cycle', () => {
        const node3 = new ListNode(3, null);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        node3.next = node1; // Creates a cycle
        const list = new LinkedList(node1);
        expect(list.hasCycle()).toBe(true);
    });

    test('detects a cycle in a list where the last node points to the first node', () => {
        const node2 = new ListNode(2, null);
        const node1 = new ListNode(1, node2);
        node2.next = node1; // Creates a cycle
        const list = new LinkedList(node1);
        expect(list.hasCycle()).toBe(true);
    });

    test('detects no cycle in an empty list', () => {
        const list = new LinkedList(null);
        expect(list.hasCycle()).toBe(false);
    });

    test('detects no cycle in a list with two nodes', () => {
        const node2 = new ListNode(2, null);
        const node1 = new ListNode(1, node2);
        const list = new LinkedList(node1);
        expect(list.hasCycle()).toBe(false);
    });

    test('detects a cycle in a list with two nodes and a cycle', () => {
        const node2 = new ListNode(2, null);
        const node1 = new ListNode(1, node2);
        node2.next = node1; // Creates a cycle
        const list = new LinkedList(node1);
        expect(list.hasCycle()).toBe(true);
    });

    test('detects no cycle in a larger list without a cycle', () => {
        const node5 = new ListNode(5, null);
        const node4 = new ListNode(4, node5);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        const list = new LinkedList(node1);
        expect(list.hasCycle()).toBe(false);
    });

    test('detects a cycle in a larger list with a cycle', () => {
        const node5 = new ListNode(5, null);
        const node4 = new ListNode(4, node5);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        node5.next = node2; // Creates a cycle
        const list = new LinkedList(node1);
        expect(list.hasCycle()).toBe(true);
    });

    test('detects a cycle in a list with multiple cycles', () => {
        const node5 = new ListNode(5, null);
        const node4 = new ListNode(4, node5);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        node5.next = node3; // Creates a cycle
        const list = new LinkedList(node1);
        expect(list.hasCycle()).toBe(true);
    });
});
