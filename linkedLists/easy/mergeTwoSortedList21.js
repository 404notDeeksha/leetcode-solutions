//Leetcode Problem 21: Merge Two Sorted Lists
// Difficulty: Easy
// Category: Linked List


// Intuition:
// 1. We will create a new list (head).
// 2. Out of 2 lists, list with 1st smaller element will be assigned to head.
// 3. We will keep track of the last node of the new list (curr).
// 4. We will compare the elements of both lists and assign the smaller element to curr.next.
// 5. We will move the pointer of the list from which we took the element to the next node.
// 6. We will repeat the process until we reach the end of both lists.
// 7. If one of the lists is empty, we will assign the other list to curr.next.
// 8. Finally, we will return the head of the new list.

// Complexity
// Time Complexity: O(n+m) where n and m are the lengths of the two lists.
// Space Complexity: O(1) as we are not using any extra space except for the new list.
// Note: We are not creating a new list, we are just merging the two lists.
// We are just changing the next pointers of the nodes of the two lists.
// We are not creating any new nodes.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

import {
    printLinkedList,
    buildLinkedList,
  } from "../../utils/linkedList/utils";

var mergeTwoLists = function(list1, list2) {

    if(!list1) return list2;
    if(!list2) return list1;

    let head=null;

    if(list1.val <= list2.val){
        head = list1;
        list1=list1.next;
    }
    else{
        head= list2;
        list2=list2.next;
    }
    let curr = head;

    while(list1 && list2){
        if(list1.val <= list2.val){
            curr.next = list1;
            list1 = list1.next;
        }else{
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    curr.next = list1? list1 : list2;

return head;

};

let arr1  = [1,2,4];
let arr2  = [1,3,4];

let list1 = buildLinkedList(arr1);
let list2 = buildLinkedList(arr2);

console.log("List 1: ");
printLinkedList(list1);
console.log("List 2: ");
printLinkedList(list2);

let mergedList = mergeTwoLists(list1,list2);
console.log("Merged List: ");
printLinkedList(mergedList);