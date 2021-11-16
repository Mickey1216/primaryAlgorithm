/**
给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。
整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3^x

示例 1：
输入：n = 27
输出：true

示例 2：
输入：n = 0
输出：false

示例 3：
输入：n = 9
输出：true

示例 4：
输入：n = 45
输出：false
 */

function isPowerOfThree(n: number): boolean {
    ////方法1
    // if(n > 1){
    //     while(n % 3 === 0)
    //         n /= 3
    // }

    // return n === 1

    // //方法2--题中n的范围是-2^31 <= n <= 2^31 - 1，而在这个范围内3的最大幂是1162261467
    // return (n > 0 && 1162261467 % n == 0)

    //方法3-递归
    return n > 0 && (n == 1 || (n % 3 == 0 && isPowerOfThree(n / 3)))
}

console.log(isPowerOfThree(27))
