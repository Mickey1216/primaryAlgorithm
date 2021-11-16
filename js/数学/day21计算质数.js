"use strict";
/**
统计所有小于非负整数 n 的质数的数量。

示例 1：
输入：n = 10
输出：4
解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

示例 2：
输入：n = 0
输出：0

示例 3：
输入：n = 1
输出：0
 */
//方法1：存在问题-输入499979（一个较大数）时，会超出时间限制。
// function countPrimes(n: number): number {
//     let total = 0
//     if(n === 0 || n === 1 || n === 2){
//         return 0
//     }
//     for(let i=2;i<n;i++){
//         let count = 0
//         for(let j=2;j<n;j++){
//             if(i % j === 0){
//                 count ++
//             }
//         }
//         if(count === 1){
//             total++
//         }
//     }
//     return total
// }
// console.log(countPrimes(499979))
//方法2:new一个数组保存质数合数的状态，将质数置为true，合数为false
function countPrimes(n) {
    const res = new Array(n).fill(true);
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (res[i]) {
            count++;
            //质数的倍数都为合数
            for (let j = 2 * i; j < n; j += i) {
                res[j] = false;
            }
        }
    }
    return count;
}
console.log(countPrimes(499979));
