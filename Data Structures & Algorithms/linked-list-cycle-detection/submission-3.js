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
     * @return {boolean}
     */
    //set method, less space efficint
    hasCycle(head) {
        let node =  head;
        let set  = new Set();
        while(node) {
            if(set.has(node)) return true

            else set.add(node);

            node= node.next;

        }
        return false;

    }
}
