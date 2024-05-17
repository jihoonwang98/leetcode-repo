import { ListNode, mergeTwoLists } from '../src/21-merge-two-lists';

describe("mergeTwoLists", () => {
    test('merges two sorted lists', () => {
        const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
        const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

        const mergedList = mergeTwoLists(list1, list2);

        let values: number[] = [];
        let current = mergedList;
        while (current !== null) {
            values.push(current.val);
            current = current.next;
        }

        expect(values).toEqual([1, 1, 2, 3, 4, 4]);
    });

    test('merges when one list is empty', () => {
        const list1 = null;
        const list2 = new ListNode(0, null);

        const mergedList = mergeTwoLists(list1, list2);

        let values: number[] = [];
        let current = mergedList;
        while (current !== null) {
            values.push(current.val);
            current = current.next;
        }

        expect(values).toEqual([0]);
    });

    test('merges when both lists are empty', () => {
        const list1 = null;
        const list2 = null;

        const mergedList = mergeTwoLists(list1, list2);

        expect(mergedList).toBeNull();
    });

    test('merges when one list is null and other has multiple elements', () => {
        const list1 = null;
        const list2 = new ListNode(1, new ListNode(3, new ListNode(5, null)));

        const mergedList = mergeTwoLists(list1, list2);

        let values: number[] = [];
        let current = mergedList;
        while (current !== null) {
            values.push(current.val);
            current = current.next;
        }

        expect(values).toEqual([1, 3, 5]);
    });

    test('merges when both lists have multiple elements', () => {
        const list1 = new ListNode(1, new ListNode(4, new ListNode(5, null)));
        const list2 = new ListNode(2, new ListNode(3, new ListNode(6, null)));

        const mergedList = mergeTwoLists(list1, list2);

        let values: number[] = [];
        let current = mergedList;
        while (current !== null) {
            values.push(current.val);
            current = current.next;
        }

        expect(values).toEqual([1, 2, 3, 4, 5, 6]);
    });

})

