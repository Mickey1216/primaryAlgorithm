/**
给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
在「杨辉三角」中，每个数是它左上方和右上方的数的和。

示例 1:
输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

示例 2:
输入: numRows = 1
输出: [[1]]
 */

function generate(numRows: number): number[][] {
    let list = [[1]]
    
    for(let i=1;i<numRows;i++){
        list.push([])
        for(let j=0;j<=i;j++){
            if(j === 0 || j === i){
                list[i].push(1)
            }else{
                list[i].push(list[i-1][j-1] + list[i-1][j])
            }
        }
    }

    return list
}

console.log(generate(5))
