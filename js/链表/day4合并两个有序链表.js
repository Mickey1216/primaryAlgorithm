"use strict";
/**
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例 1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

示例 2：
输入：l1 = [], l2 = []
输出：[]

示例 3：
输入：l1 = [], l2 = [0]
输出：[0]
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function mergeTwoLists(l1, l2) {
    //判空操作
    if (l1 === null)
        return l2;
    if (l2 === null)
        return l1;
    let dummy = new ListNode(0);
    let curr = dummy;
    while (l1 !== null && l2 !== null) {
        //比较，哪个小就把哪个先放在新链表中
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        }
        else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    //再把不为空的链表挂到新链表中
    curr.next = l1 === null ? l2 : l1;
    return dummy.next;
}
