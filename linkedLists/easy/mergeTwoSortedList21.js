//Leetcode Problem 21: Merge Two Sorted Lists
// Difficulty: Easy
// Category: Linked List


// Intuition:
// We will use Dummy node for merged List
// 1. We will create a new node (dummy).
// 2. Out of 2 lists, list with 1st smaller or equal element will be assigned to dummy of meregd list.
// 3. We will keep track of the last node of the merged list (curr).
// 4. We will run a loop till one of the list becomes null.
// 5. We will compare the elements of both lists and assign the smaller element to curr.next.
// 5. We will move the pointer of list to its next node which gave merged list its smaller element.
// 6. We will also move the curr pointer to its next node.
// loop ends here
// 7. If one of the lists is empty, we will assign the other list to curr.next.
// 8. Finally, we will return the dummy.next of the meregd list.

// Complexity
// Time Complexity: O(n+m) where n and m are the lengths of the two lists.
// Space Complexity: O(1) as we are not using any extra space except for the new list.

// Note: We are not creating a new list, we are just merging the two lists.
// We are just changing the next pointers of the nodes of the two lists.
// We are not creating any new nodes.

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

import { ListNode } from "../../utils/linkedList/utils";
import {
    printLinkedList,
    buildLinkedList,
  } from "../../utils/linkedList/utils";

var mergeTwoLists = function(list1, list2) {

    if(!list1) return list2;
    if(!list2) return list1;

    let dummy = new ListNode(0);
    let curr = dummy;

    while(list1 && list2){
    if(list1.val <= list2.val){
        curr.next = list1;
        list1=list1.next;
    }
    else{
        curr.next= list2;
        list2=list2.next;
    }
    curr=curr.next
}
    curr.next = list1 || list2;

return dummy.next;
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