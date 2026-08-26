/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let stack =[];

        let curr = head;
        if(curr ==null) return null;

        while(curr!==null) {
            stack.push(curr);
            curr = curr.next;
        } 

            let newHead = stack.pop();
            let  newCurr = newHead;

            while(stack.length>0){
                newCurr.next = stack.pop();
                newCurr= newCurr.next;
            }

            newCurr.next =null;
            return newHead;
        }
    }
