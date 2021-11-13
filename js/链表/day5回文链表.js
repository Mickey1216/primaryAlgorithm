"use strict";
/**
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

示例 1：
输入：head = [1,2,2,1]
输出：true

示例 2：
输入：head = [1,2]
输出：false
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function isPalindrome(head) {
    let fast = head;
    let slow = head;
    //通过快慢指针找到中点
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    //如果fast不为空，说明链表的长度是奇数个
    if (fast !== null) {
        slow = slow.next;
    }
    //反转后半部分链表
    slow = reverse(slow);
    fast = head;
    while (show !== null) {
        //然后比较，判断节点值是否相等
        if (fast.val !== slow.val)
            return false;
        fast = fast.next;
        slow = slow.next;
    }
    return true;
}
//反转链表
function reverse(head) {
    let prev = null;
    while (head !== null) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
