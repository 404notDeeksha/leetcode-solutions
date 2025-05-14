// Leetcode 82. Rotate Duplicates from Sorted List II
// Category: Linked List
// Difficulty: Medium
// Approaches: Two Pointers

// Intuition:   
// - We can use two pointers to traverse the linked list.
// - A dummy Node will be used to at the start of the list, to keep track of edge cases.
// - prev pointer will be used to keep track of the last unique node of list.
// curr pointer will be used to traverse the list & check for duplicates.
//Loop through the list with curr:
// If curr has duplicates (i.e., the next node has the same value), move curr forward until the values change.
// If duplicates were found:
// Skip them all by setting prev.next = curr.next
// If no duplicates were found:
// Move prev forward (because curr was unique).
// Always move curr forward.
// Return dummy.next — the head of the cleaned list.

// Complexity:
// - Time complexity: O(n), where n is the length of the linked list.
// - Space complexity: O(1), as we are using only two pointers and not storing any additional data structures.



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
**/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

 var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;

    let dummy = new ListNode(0);
    let isDuplicate=false;
    dummy.next=head;
    let prev=dummy;
    let curr=head;
    while(curr){
        isDuplicate=false;
        while(curr.next && curr.val === curr.next.val){
            isDuplicate=true;
            curr=curr.next;
        }
        if(isDuplicate) 
            { prev.next = curr.next}
        else{
            prev=prev.next;
        }
            curr=curr.next;
    }
    return dummy.next;

    }

const buildLinkedList = (arr)=>{
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}    
const printLinkedList = (head) => {
    let current = head;
    const result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

const arr=[1,2,3,3,4,4,5];
const head=buildLinkedList(arr);
const newHead=deleteDuplicates(head);
printLinkedList(newHead);