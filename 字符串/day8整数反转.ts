/**
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。

示例 1：
输入：x = 123
输出：321

示例 2：
输入：x = -123
输出：-321

示例 3：
输入：x = 120
输出：21

示例 4：
输入：x = 0
输出：0
 */

function reverse(x: number): number {
    let temp = []
    if(x === 0){
        return 0
    }else if(x < 0){
        temp = x.toString().substring(1).split('').reverse()
        return -Number(temp.join('')) >= -Math.pow(2,31) ? -Number(temp.join('')) : 0
    }else{ //x > 0
        temp = x.toString().split('').reverse()  
        return Number(temp.join('')) <= Math.pow(2,31) - 1 ? Number(temp.join('')) : 0
    }  
}

console.log(reverse(1534236469))
