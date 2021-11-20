/**
给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。
实现 Solution class:
    Solution(int[] nums) 使用整数数组 nums 初始化对象
    int[] reset() 重设数组到它的初始状态并返回
    int[] shuffle() 返回数组随机打乱后的结果
 
示例：
输入
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
输出
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

解释
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
 */

class Solution {
    nums:number[] = []
    constructor(nums: number[]) {
        this.nums = nums
    }

    reset(): number[] {
        return this.nums
    }

    shuffle(): number[] {
        //JSON.parse(JSON.stringify(obj))--我们一般用来深拷贝
        let numbers = JSON.parse(JSON.stringify(this.nums))
        
        for(let i=1;i<numbers.length;i++){
            //生成随机数
            let index = Math.floor(Math.random()*(i+1))
            this.swap(numbers,i,index)
        }
        return numbers
    }

    //交换数组中的两个数
    swap(nums:number[],i:number,j:number):void {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
}

//测试
let nums = [1,2,3]
let obj = new Solution(nums)
let param_1 = obj.reset()
let param_2 = obj.shuffle()
console.log(obj,param_1,param_2)

