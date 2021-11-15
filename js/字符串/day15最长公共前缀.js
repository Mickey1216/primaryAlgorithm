"use strict";
/**
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 */
function longestCommonPrefix(strs) {
    /**
    利用数组的 Reduce 方法实现的最简洁代码
        取第一个字符串为公共前缀
        逐个对比，返回两两元素的公共前缀
        将 2 中的公共前缀和下一个元素对比，得到新的公共前缀
     */
    return strs.reduce((prev, cur) => {
        while (cur.indexOf(prev) !== 0) {
            prev = prev.slice(0, prev.length - 1);
        }
        return prev;
    });
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
