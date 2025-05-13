/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let a = headA;
    let b = headB;

    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }

    return a;
}


function buildListFromArray(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

const shared = buildListFromArray([8, 4, 5]);

const headA = new ListNode(4);
headA.next = new ListNode(1);
headA.next.next = shared;

const headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = new ListNode(1);
headB.next.next.next = shared;

const intersection = getIntersectionNode(headA, headB);

if (intersection) {
    console.log("Intersection at node with value:", intersection.val);
} else {
    console.log("No intersection");
}
