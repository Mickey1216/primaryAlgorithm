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
////方法1
// function longestCommonPrefix(strs: string[]): string {
//     /**
//     利用数组的 Reduce 方法实现的最简洁代码
//         取第一个字符串为公共前缀
//         逐个对比，返回两两元素的公共前缀
//         将 2 中的公共前缀和下一个元素对比，得到新的公共前缀
//      */
//     return strs.reduce((prev, cur) => {
//         while (cur.indexOf(prev) !== 0) {
//             prev = prev.slice(0, prev.length - 1)
//         }
//         return prev
//     })
// }
////方法2
// function longestCommonPrefix(strs: string[]): string {
//     let index = 0
//
//     while(1){
//         let common_char_flag = true
//         let all_elem_ended_flag = true
//
//         for(let i = 0; i < strs.length - 1; i++){
//             if(strs[i][index] !== undefined && all_elem_ended_flag)
//                 all_elem_ended_flag = false
//
//             if(all_elem_ended_flag && i === strs.length - 2){
//                 if(strs[strs.length - 1][index] !== undefined)
//                     all_elem_ended_flag = false
//             }
//
//             if(all_elem_ended_flag)
//                 break
//
//             if(strs[i][index] != strs[i + 1][index]){
//                 common_char_flag = false
//                 break
//             }
//         }
//
//         if(common_char_flag && !all_elem_ended_flag)
//             index++
//         else
//             break
//     }
//
//     return strs[0].substring(0, index)
// }
//方法3
function longestCommonPrefix(strs) {
    let index = 0;
    let strs_len = strs.length;
    let len = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        let t = strs[i].length;
        len = len > t ? t : len;
    }
    while (1) {
        let ch = strs[0][index];
        let diff_flag = false;
        for (let i = 1; i < strs_len; i++) {
            if (ch != strs[i][index]) {
                diff_flag = true;
                break;
            }
        }
        index++;
        if (diff_flag || index === len)
            break;
    }
    return strs[0].substring(0, index);
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "flower", "flower"]));
