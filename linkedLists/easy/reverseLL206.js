// Leetcode 206. Reverse Linked List
// Category: Linked List
// Difficulty: Easy
// Approaches: pointer

//Intuition
// - we will work with 3 pointers. prev, curr, next.
// - prev will initially be null, & will store reversed LL.
// - next will be temporary & will contain remaining LL to be reversed.
// - curr will be the current node we are working with. We will traverse the list using curr, & assign prev & next accordingly.
// - We will keep moving curr to next, & prev to curr, until we reach the end of the list.
// - At the end, prev will be the new head of the reversed list.

// - Complexity:
// - Time complexity: O(n), where n is the length of the linked list.
// - Space complexity: O(1), as we are using only three pointers and not storing any additional data structures.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
import {
  printLinkedList,
  // ListNode,
  buildLinkedList,
} from "../../utils/linkedList/utils";

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

let arr = [1, 2, 3, 4, 5, 6];
let head = buildLinkedList(arr);

console.log("Original Linked List:");
printLinkedList(head);

let reversedHead = reverseList(head);

console.log("Reversed Linked List:");
printLinkedList(reversedHead);
