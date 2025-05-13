//Leetcode 19. Remove Nth Node From End of List
// // Difficulty: Medium
// // Category: Linked List
// // Approach: Slow and Fast Pointer


// Intuition 
// - We can use the slow and fast pointer approach to find the nth node from the end of the list.
// - The fast pointer moves n steps ahead of the slow pointer.
// - When the fast pointer reaches the end of the list, the slow pointer will be at the (n+1)th node from the end.
// - We can then remove the nth node from the end of the list by updating the next pointer of the slow pointer.
// - We use a dummy node to handle the case where we need to remove the head of the list.
// - The dummy node points to the head of the list, and we return dummy.next as the new head of the list.


// Complexity
// - Time complexity: O(n)
// - The fast pointer traverses the list once, so the time complexity is O(n).
// - Space complexity: O(1)
// - We are using only a constant amount of space to store the pointers.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy={val:0, next:null};
    dummy.next=head;
    let slow=fast=dummy;
    for(let i=0;i<=n;i++){
        fast=fast.next;
    }
    while(fast){
        slow=slow.next;
        fast=fast.next;

    }
    slow.next=slow.next.next;
    return dummy.next
};


function buildLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = { val: arr[0], next: null };
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = { val: arr[i], next: null };
        current = current.next;
    }
    return head;
}

function printList(head) {
    let current = head;
    let result = '';
    while (current) {
        result += current.val + ' → ';
        current = current.next;
    }
    result += 'null';
    console.log("List:",result);
}

const arr= [1,2,3,4,5,6,7];
const n=2;
const head=buildLinkedList(arr);
printList(head);
const result=removeNthFromEnd(head,n);
printList(result);