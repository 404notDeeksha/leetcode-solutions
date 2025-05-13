// Leetcode 160. Intersection of Two Linked Lists
// Category: Linked List
// Difficulty: Easy
// Approaches: Slow and Fast Pointers

// Intuition:
// - We can use two pointers to traverse both linked lists.
// - If the two pointers meet at some node, that node is the intersection point.
// - If they reach the end of the lists without meeting, there is no intersection.
// - The idea is to traverse both lists and switch to the other list when reaching the end.
// - This way, both pointers will traverse the same total distance when they meet.

// Complexity:
// - Time complexity: O(n + m), where n and m are the lengths of the two linked lists.
// - Space complexity: O(1), as we are using only two pointers and not storing any additional data structures.

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
