/**
给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

示例 1：
    1
   / \
  -10 5
   \   \
   -3   9
输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：

示例 2：
    3    1
   /      \
  1        3
输入：nums = [1,3]
输出：[3,1]
解释：[1,3] 和 [3,1] 都是高度平衡二叉搜索树。
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if(!nums.length)
        return null

    let t = Math.floor(nums.length / 2)
    let node = new TreeNode(nums[t],null,null)

    if(t){
        node.left = sortedArrayToBST(nums.slice(0,t))
    }
    if(t+1 < nums.length){
        node.right = sortedArrayToBST(nums.slice(t+1,nums.length))
    }

    return node
}