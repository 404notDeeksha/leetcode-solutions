//Leetcode 142. Linked List Cycle II
// Difficulty: Medium
// Category: Linked List
// Approach: Slow and Fast Pointer

// Intuition
// - If there is a cycle, the slow and fast pointers will meet at some point.
// - To find the entry point of the cycle, we can use another pointer starting from the head of the list.
// - Move both pointers (the one from the head and the one that met) at the same speed.
// - The point where they meet again is the entry point of the cycle.

// Complexity
// - Time complexity: O(n)
// fast pointer moves twice as fast as the slow pointer.
// - The slow pointer will traverse the cycle once, and the fast pointer will traverse the cycle twice.
// - The total number of nodes traversed is n, where n is the number of nodes in the list.
// - Therefore, the time complexity is O(n).

// - Space complexity: O(1)
// - We are using only a constant amount of space to store the pointers.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
     this.val = val;
     this.next = null;
}
var detectCycle = function(head) {
    if(!head || !head.next)return null;
    let slow= head;
    let fast = head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;

        if(slow===fast){
            let entry = head;
            while(entry!==slow){
                entry=entry.next;
                slow=slow.next;
            }
            return entry;
        }
    }
    return null;    
};

let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; 

const cycleNode = detectCycle(node1); 
if (cycleNode) {
    console.log("Cycle starts at node with value:", cycleNode.val);
} else {
    console.log("No cycle detected");
}