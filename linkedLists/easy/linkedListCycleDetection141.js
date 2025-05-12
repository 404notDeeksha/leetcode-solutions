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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

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

let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; 

console.log(hasCycle(node1)); // true

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

function ListNode1(val) {
    this.val = val;
    this.next = null;
}

var hasCycle1 = function(head) {
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

let node11 = new ListNode1(3);
let node12 = new ListNode1(2);
let node13 = new ListNode1(0);
let node14 = new ListNode1(-4);

node11.next = node12;
node12.next = node13;
node13.next = node14;
node14.next = node12; 

console.log(hasCycle1(node11));