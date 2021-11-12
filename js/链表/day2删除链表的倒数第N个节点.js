"use strict";
/**
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

示例 1：
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]

示例 2：
输入：head = [1], n = 1
输出：[]

示例 3：
输入：head = [1,2], n = 1
输出：[1]
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function removeNthFromEnd(head, n) {
    let pre = head;
    let last = len(head) - n;
    //如果last等于0表示删除的是头结点
    if (last === 0) {
        return head.next;
    }
    //这里首先要找到要删除链表的前一个结点
    for (let i = 0; i < last - 1; i++) {
        pre = pre.next;
    }
    //然后让前一个结点的next指向要删除节点的next
    pre.next = pre.next.next;
    return head;
}
//求链表的长度
function len(head) {
    let len = 0;
    while (head !== null) {
        len++;
        head = head.next;
    }
    return len;
}
