/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
    private _val: number;
    private _next: ListNode | null;

    set val(value: number) {
        this._val = value;
    }

    set next(value: ListNode | null) {
        this._next = value;
    }

    get next(): ListNode | null {
        return this._next;
    }

    get val(): number {
        return this._val;
    }

    constructor(val: number, next: ListNode | null) {
        this._val = val;
        this._next = next;
    }
}

export class LinkedList {
    private readonly head: ListNode | null;

    constructor(head: ListNode | null) {
        this.head = head;
    }

    public hasCycle(): boolean {
        if(this.head === null) return false;

        let slow: ListNode | null | undefined = this.head;
        let fast: ListNode | null | undefined= this.head;

        while(fast !== null) {
            fast = fast?.next?.next;
            if(fast === null || fast === undefined) return false;

            slow = slow?.next;

            if(fast === slow) return true;
        }

        return false;
    }
}

function hasCycle(head: ListNode | null): boolean {
    const linkedList = new LinkedList(head);
    return linkedList.hasCycle();
}