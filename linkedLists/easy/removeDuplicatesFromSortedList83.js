// Leetcode 83. Remove Duplicates from Sorted List
// Difficulty: Easy
// Approach: pointerEvents: 

// - Intuition:
// - We check if the current node's value is equal to the next node's value.
// - If they are equal, we skip the next node by setting the current node's next pointer to the node after the next node.
// - If they are not equal, we put the current node's next pointer to the next node.
// - We repeat this process until we reach the end of the linked list.
// - We return the head of the modified linked list.

// Complexity Analysis:
// - Time Complexity: O(n), where n is the number of nodes in the linked list.

// - Space Complexity: O(1), as we are not using any extra space for the linked list.
// - We are only using a few pointers to traverse the linked list.
// - The space complexity is constant, as we are not using any extra space for the linked list.


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

import { buildLinkedList, printLinkedList } from '../../utils/linkedList/utils';
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    
    let pos = head;
    let curr = head.next;

    while(curr){
        while(curr && pos.val === curr.val){
            curr=curr.next;
        }
        pos.next=curr;
        pos=curr;
        if(curr) curr=curr.next;
        }
    return head;
};

let arr=[1,1,2,2,3,3,4];
let head = buildLinkedList(arr);
console.log("Original Linked List:");
printLinkedList(head);
let newHead = deleteDuplicates(head);
console.log("Linked List after removing duplicates:");
printLinkedList(newHead);