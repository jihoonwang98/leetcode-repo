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

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let head: ListNode | null = null;
    let tail: ListNode | null = null;
    const emptyNode: ListNode = new ListNode(-1, null);
    head = emptyNode;
    tail = emptyNode;

    let ptr1 = list1;
    let ptr2 = list2;

    while(ptr1 !== null && ptr2 !== null) {
        if(ptr1.val <= ptr2.val) {
            const node = new ListNode(ptr1.val, null);
            tail!.next = node;
            tail = tail!.next;
            ptr1 = ptr1.next;
        }

        else {
            const node = new ListNode(ptr2.val, null);
            tail!.next = node;
            tail = tail!.next;
            ptr2 = ptr2.next;
        }
    }

    while(ptr1 !== null) {
        const node = new ListNode(ptr1.val, null);
        tail!.next = node;
        tail = tail!.next;
        ptr1 = ptr1.next;
    }

    while (ptr2 !== null) {
        const node = new ListNode(ptr2.val, null);
        tail!.next = node;
        tail = tail!.next;
        ptr2 = ptr2.next;
    }

    return head.next;
};