"use strict";
/**
动态规划还是那常见的几个步骤:
1.确定状态
2.找到转移公式
3.确定初始条件以及边界条件
4.计算结果
 */
/**
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。

示例 1：
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶

示例 2：
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
 */
// //方法1--尾递归
// function climbStairs(n: number): number {
//     return Fibonacci(n,1,1)
// }
// function Fibonacci(n:number,a:number,b:number):number{
//     if(n <= 1)
//         return b
//     return Fibonacci(n-1,b,a+b)
// }
// console.log(climbStairs(4))
// // //方法2--非递归
// function climbStairs(n: number): number {
//     if(n <= 2) return n
//     let first = 1
//     let second = 2
//     let sum = 0
//     while(n-- > 2){
//         sum = first + second
//         first = second
//         second = sum
//     }
//     return sum
// }
// console.log(climbStairs(10))
// 方法3---公式计算（斐波那契公式）
function climbStairs(n) {
    let sqrt = Math.sqrt(5);
    return Math.floor(((Math.pow((1 + sqrt) / 2, n + 1) - Math.pow((1 - sqrt) / 2, n + 1)) / sqrt));
}
console.log(climbStairs(10));
