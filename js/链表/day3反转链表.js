"use strict";
/**
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

示例 1：
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

示例 2：
输入：head = [1,2]
输出：[2,1]

示例 3：
输入：head = []
输出：[]
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function reverseList(head) {
    //终止条件
    if (head === null || head.next === null) {
        return head;
    }
    //保存当前节点的下一个节点
    let next = head.next;
    //从当前节点的下一个结点开始递归调用
    let reverse = reverseList(next);
    /**
    reverse是反转之后的链表，因为函数reverseList表示的是对链表的反转，所以反转完之后next肯定是链表reverse的尾结点,
    然后我们再把当前节点head挂到next节点的后面就完成了链表的反转。
     */
    next.next = head;
    //这里head相当于变成了尾结点，尾结点都是为空的，否则会构成环
    head.next = null;
    return reverse;
}
