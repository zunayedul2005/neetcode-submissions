class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) return null;

        let stack = [];
        let curr = head;

        // 1. Push node OBJECTS onto the stack
        while (curr !== null) {
            stack.push(curr);
            curr = curr.next;
        }

        // 2. Pop the last node—this becomes our new head
        let newHead = stack.pop();
        curr = newHead;

        // 3. Pop remaining nodes and update pointers
        while (stack.length > 0) {
            curr.next = stack.pop();
            curr = curr.next;
        }

        // 4. Important: Set tail's next to null to prevent cycle
        curr.next = null;

        return newHead;
    }
}