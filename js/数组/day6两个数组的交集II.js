"use strict";
/**
给定两个数组，编写一个函数来计算它们的交集。

示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]

示例 2:
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
 */
function intersect(nums1, nums2) {
    //排序
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0, j = 0;
    let res = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        }
        else if (nums1[i] > nums2[j]) {
            j++;
        }
        else {
            res.push(nums1[i]);
            i++;
            j++;
        }
    }
    return res;
}
console.log(intersect([1, 2, 2, 1], [2]));
