//Leetcode : 876. Middle of the Linked List
// Difficulty: Easy
//  Category: Linked List
//  Approach: Slow and Fast Pointer

// Intuition
// - We can use the slow and fast pointer approach to find the middle of the linked list.
// - The slow pointer moves one step at a time, while the fast pointer moves two steps at a time.
// - When the fast pointer reaches the end of the list, the slow pointer will be at the middle node.
// - If the list has an even number of nodes, the slow pointer will be at the second middle node.
// - If the list has an odd number of nodes, the slow pointer will be at the middle node.

// Complexity
// - Time complexity: O(n)
// - The slow pointer traverses the list once, so the time complexity is O(n).
// - Space complexity: O(1)
// - We are using only a constant amount of space to store the pointers.
//

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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = null;

const middle = middleNode(node1);
console.log("Middle", middle.val);
