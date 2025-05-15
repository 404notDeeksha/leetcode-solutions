// LeetCode Problem 143: Reorder List
// Difficulty: Medium
// Approach: pointerEvents: 

//Intuition:
// 1. Find the middle of the linked list using the slow and fast pointer technique.
// 2. Reverse the second half of the linked list.
// 3. Both middle & reversed second half shall end in null.
// 4. Merge the two halves of the linked list by alternating nodes from each half.
// 5. The first half of the linked list will be the original first half, and the second half will be the reversed second half.
// 6. The final linked list will be in the desired order.

// Complexity:
// Time Complexity: O(n), where n is the number of nodes in the linked list.
// Space Complexity: O(1), as we are not using any extra space except for a few pointers.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

import {printLinkedList, buildLinkedList} from "../../utils/linkedList/utils";

var reorderList = function(head) {
    if(!head || !head.next) return head;
    let slow=head;
    let fast=head;

    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }

    let prev=null;
    let curr=slow.next;
    slow.next=null;

    while(curr){
    let next = curr.next;
    curr.next=prev;
    prev=curr;
    curr=next;
    }

    let left = head;
    let right= prev;

    while(right){

        let temp1 = left.next;
        let temp2 = right.next;

        left.next=right;
        right.next=temp1;

        left=temp1;
        right=temp2;
    }
};

let arr = [1,2,3,4];

let list = buildLinkedList(arr);
console.log("Before Reorder List");

printLinkedList(list);
reorderList(list);

console.log("After Reorder List");
printLinkedList(list);