/**
给定一个二叉树，检查它是否是镜像对称的。
例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
    1
   / \
  2   2
 / \ / \
3  4 4  3

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
    1
   / \
  2   2
   \   \
   3    3
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

function isSymmetric(root: TreeNode | null): boolean {
    if(root === null)
        return true
    
    //从两个子节点开始判断
    return isSymmetricHelper(root.left,root.right)
}

function isSymmetricHelper(left:TreeNode | null,right:TreeNode | null):boolean{
    //如果左右子节点都为空，说明当前节点是叶子节点，返回true
    if (left === null && right === null)
        return true
    
    //如果当前节点只有一个子节点或者有两个子节点，但两个子节点的值不相同，直接返回false
    if (left === null || right === null || left.val !== right.val)
        return false

    //然后左子节点的左子节点和右子节点的右子节点比较，左子节点的右子节点和右子节点的左子节点比较
    return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left)
}