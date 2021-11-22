/**
给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
有效 二叉搜索树定义如下：
    节点的左子树只包含 小于 当前节点的数。
    节点的右子树只包含 大于 当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。
 
示例 1：
    2
   / \
  1   3
输入：root = [2,1,3]
输出：true

示例 2：
    5
   / \
  1   4
    /  \
   3    6
输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。
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

function isValidBST(root: TreeNode | null): boolean {
    ////方法1--递归
    // if(root === null)
    //     return true
    
    // if(root.left !== null && root.val <= root.left.val || root.right !== null && root.val >= root.right.val)
    //     return false
    
    // return isValidBST(root.left) && isValidBST(root.right)

    //方法2--中序遍历（递归）
    let res = true
    let arr:any = []
    const inorder = root => {
        if(!root) return 
        inorder(root.left)
        arr.push(root.val)
        inorder(root.right)
    }

    inorder(root)

    for(let i=0;i<arr.length-1;i++){
        if(arr[i] >= arr[i+1]){
            res = false
            break
        }
    }

    return res
}