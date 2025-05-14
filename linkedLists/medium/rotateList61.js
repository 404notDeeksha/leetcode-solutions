// Leetcode 61. Rotate List
// Category: Linked List
// Difficulty: Medium
// Approaches: Two pointer.

// Intuition:
// - We can use two pointers to traverse the linked list.
// - The first pointer will traverse the list to find the length and the tail.
// - The second pointer will traverse the list again to find the new head and new Tail.
// - The new head will be the (length - k)th node from the start.
// - The new tail will be the (length - k - 1)th node from the start.
// - We will then set the next of the new tail to null and the next of the tail to the head.
// - Finally, we will return the new head.

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
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val,next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var rotateRight = function(head, k) {
    if(!head || !head.next || k==0) return head;

    let length=1;
    let tail=head;
    while(tail.next){
        tail=tail.next;
        length++;
    }

    k=k%length;
    if(k===0) return head;

    let newTail=head;
    for(let i=0;i<length-k-1; i++){
        newTail=newTail.next;
    }
    let newHead = newTail.next;
    newTail.next=null;
    tail.next=head;

return newHead;

};

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
};

const arr=[0,1,2];
const k=4;
const head = buildLinkedList(arr);
const rotatedList = rotateRight(head, k);
printLinkedList(rotatedList);