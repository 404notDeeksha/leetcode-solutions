//Leetcode: 234. Palindrome Linked List
//  Difficulty: Easy
//  Category: Linked List
//  Approach: Slow and Fast Pointer


//
// Intuition    
// - We can use the slow and fast pointer approach to find the middle of the linked list.
// - The slow pointer moves one step at a time, while the fast pointer moves two steps at a time.
// - When the fast pointer reaches the end of the list, the slow pointer will be at the middle node.
// - We can then reverse the second half of the list and compare it with the first half.
// - If they are equal, the list is a palindrome.

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
 * @return {boolean}
 */
function isPalindrome(head) {
    if (!head || !head.next) return true;

    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    while (slow) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    let left = head;
    let right = prev;
    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;
}

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
    const result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

const arr = [1, 2, 3,4,3,2, 1];
const head = buildLinkedList(arr);
printList(head);
console.log("Is Palindrome?", isPalindrome(head));
