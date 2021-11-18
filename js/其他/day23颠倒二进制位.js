"use strict";
/**
颠倒给定的 32 位无符号整数的二进制位。

示例 1：
输入：n = 00000010100101000001111010011100
输出：964176192 (00111001011110000010100101000000)
解释：输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
     因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。

示例 2：
输入：n = 11111111111111111111111111111101
输出：3221225471 (10111111111111111111111111111111)
解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
     因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。
 */
function reverseBits(n) {
    let arr = n.toString(2).split("");
    let k = arr.length;
    for (let i = 0; i < 32 - k; i++) {
        arr.unshift('0'); //前面补0
    }
    let num = 0;
    for (let i = 0; i < arr.length + 1; i++) {
        if (arr[i] === "1") {
            num += Math.pow(2, i); //二进制转十进制
        }
    }
    return num;
}
console.log(reverseBits(11111111111111111111111111111101));
