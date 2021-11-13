"use strict";
/**
给定一个链表，判断链表中是否有环。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
如果链表中存在环，则返回 true 。 否则，返回 false 。

示例 1：
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。

示例 2：
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。

示例 3：
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function hasCycle(head) {
    //方法1
    let s = new Set();
    while (head !== null) {
        //如果重复出现说明有环
        if (s.has(head)) {
            return true;
        }
        //否则就把当前节点加入到集合中
        s.add(head);
        head = head.next;
    }
    return false;
    // //方法2
    // if(head === null)
    //     return false
    // //快慢两个指针
    // let slow = head
    // let fast = head
    // while(fast !== null && fast.next !== null){
    //     //慢指针每次走一步
    //     slow = slow.next
    //     //快指针每次走两步
    //     fast = fast.next.next
    //     //如果相遇，说明有环，直接返回true
    //     if(slow === fast)
    //         return true
    // }
    // //否则没有环
    // return false
}
