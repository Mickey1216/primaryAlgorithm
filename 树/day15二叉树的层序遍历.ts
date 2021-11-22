/**
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：
[
  [3],
  [9,20],
  [15,7]
]
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

//层序遍历就是按二叉树从上到下，从左到右依次打印每个节点中存储的数据
function levelOrder(root: TreeNode | null): number[][] {
  //BFS
  if(root === null)
    return new Array()
  
  let queue = new Array()
  let res = new Array()
  queue.push(root)
  
  while(queue.length){
    let item = new Array()
    let len = queue.length

    for(let i=0;i<len;i++){
      //获取第一个元素
      let node = queue.shift()
      item.push(node.val)

      if(node.left !== null){
        queue.push(node.left)
      }
      if(node.right !== null){
        queue.push(node.right)
      }
    }
    res.push(item)
  }

  return res
}