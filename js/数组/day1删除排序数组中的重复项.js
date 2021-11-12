"use strict";
/**
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

示例：
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

提示：
0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums 已按升序排列
 */
//方法1
function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                nums.splice(j, 1);
                j--;
            }
            else {
                break;
            }
        }
    }
    return nums.length;
}
console.log(removeDuplicates([0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
//方法2
function _removeDuplicates(nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    let left = 0;
    let right = 1;
    while (right < nums.length) {
        if (nums[left] == nums[right])
            right++;
        else {
            left++;
            nums[left] = nums[right];
        }
    }
    return left + 1;
}
console.log(_removeDuplicates([0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
