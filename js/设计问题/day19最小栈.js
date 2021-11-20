"use strict";
/**
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
    push(x) —— 将元素 x 推入栈中。
    pop() —— 删除栈顶的元素。
    top() —— 获取栈顶元素。
    getMin() —— 检索栈中的最小元素。
 
示例:
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
输出：
[null,null,null,null,-3,null,0,-2]
解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 */
class MinStack {
    constructor() {
        this.stack = [];
        this.min = null;
    }
    push(val) {
        if (this.stack.length == 0) {
            this.stack.push(0);
            this.min = val;
        }
        else {
            this.stack.push(val - this.min);
            if (val < this.min)
                this.min = val;
        }
    }
    pop() {
        if (this.stack.length === 0) {
            return;
        }
        let t = this.stack.pop();
        if (t < 0)
            this.min -= t;
    }
    top() {
        let t = this.stack[this.stack.length - 1];
        if (t >= 0) {
            return this.stack[this.stack.length - 1] + this.min;
        }
        else {
            return this.min;
        }
    }
    getMin() {
        return this.min;
    }
}
//测试
let s = new MinStack();
s.push(-2);
s.push(0);
s.push(-3);
console.log(s.getMin());
s.pop();
console.log(s.top());
console.log(s.getMin());
