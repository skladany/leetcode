## 0382. Linked List Random Node

### Notes:

Not entirely sure I met the constraints of this problem. Brute forced it.

Still O(n) I'd say though. My solution was simple to count the length first,
then get a random sampling. Tecnically is O(2\*n)

Best solution on leetcode is ["Reservoir Sampling"](https://www.youtube.com/watch?v=A1iwzSew5QY)

---

https://leetcode.com/problems/linked-list-random-node

Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

Follow up:
What if the linked list is extremely large and its length is unknown to you? Could you solve this efficiently without using extra space?

Example:
// Init a singly linked list [1,2,3].
ListNode head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
Solution solution = new Solution(head);

// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
solution.getRandom();
