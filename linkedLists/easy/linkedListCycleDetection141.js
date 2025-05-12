// LeetCode #141: Linked List cycle detection
// Difficulty: Easy
// Category: Linked List
// Approach: Slow and Fast Pointer

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//Complexity
// - Time complexity: O(n)
// - Space complexity: O(1)
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    //fast.next = null.next -> err in js for [];

    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
        
        if(slow===fast) return true;
    }
    return false;
};

// Approach: HashSet

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Complexity
// - Time complexity: O(n)
// - Space complexity: O(n)

var hasCycle = function(head) {
    let set = new Set();
    let curr = head;
    while(curr){
    if(set.has(curr)){
        return true;
    }
    set.add(curr);
    curr=curr.next;
    }
    return false;
};