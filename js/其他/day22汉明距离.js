"use strict";
/**
两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
给你两个整数 x 和 y，计算并返回它们之间的汉明距离。

示例 1：
输入：x = 1, y = 4
输出：2
解释：
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
上面的箭头指出了对应二进制位不同的位置。

示例 2：
输入：x = 3, y = 1
输出：1
 */
function hammingDistance(x, y) {
    //x和y的二进制
    let bx = x.toString(2).split('');
    let by = y.toString(2).split('');
    //填充0
    while (bx.length % 4 !== 0) {
        bx.unshift('0');
    }
    while (by.length % 4 !== 0) {
        by.unshift('0');
    }
    //让bx和by的长度相同
    if (bx.length < by.length) {
        let diff = by.length - bx.length;
        for (let i = 0; i < diff; i++) {
            bx.unshift('0');
        }
    }
    else {
        let diff = bx.length - by.length;
        for (let i = 0; i < diff; i++) {
            by.unshift('0');
        }
    }
    //比较bx和by的每一位
    let count = 0;
    for (let i = 0; i < bx.length; i++) {
        if (bx[i] !== by[i])
            count++;
    }
    return count;
}
console.log(hammingDistance(3, 1));
