"use strict";
/**
请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 。
题目数据保证需要删除的节点 不是末尾节点 。

示例：
输入：head = [4,5,1,9], node = 5
输出：[4,1,9]
解释：指定链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9

提示：
链表中节点的数目范围是 [2, 1000]
-1000 <= Node.val <= 1000
链表中每个节点的值都是唯一的
需要删除的节点 node 是 链表中的一个有效节点 ，且 不是末尾节点
 */
//节点
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
//删除给定节点
function deleteNode(root) {
    root.val = root.next.val;
    root.next = root.next.next;
}
//测试
let node4 = new ListNode(4, null);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
let show = (startNode) => {
    startNode = (startNode === undefined ? node1 : startNode);
    let str = "";
    while (startNode !== null) {
        str += startNode.val.toString() + (startNode.next === null ? '' : " -> ");
        startNode = startNode.next;
    }
    console.log(str);
};
show();
deleteNode(node2);
show();
