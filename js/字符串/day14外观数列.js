"use strict";
/**
给定一个正整数 n ，输出外观数列的第 n 项。
「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。
你可以将其视作是由递归公式定义的数字字符串序列：
countAndSay(1) = "1"
countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。

前五项如下：
1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1
描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
要描述 一个数字字符串，首先要将字符串分割为 最小 数量的组，每个组都由连续的最多 相同字符 组成。
然后对于每个组，先描述字符的数量，然后描述字符，形成一个描述组。
要将描述转换为数字字符串，先将每组中的字符数量用数字替换，再将所有描述组连接起来。

示例 1：
输入：n = 1
输出："1"
解释：这是一个基本样例。

示例 2：
输入：n = 4
输出："1211"
解释：
countAndSay(1) = "1"
countAndSay(2) = 读 "1" = 一 个 1 = "11"
countAndSay(3) = 读 "11" = 二 个 1 = "21"
countAndSay(4) = 读 "21" = 一 个 2 + 一 个 1 = "12" + "11" = "1211"
 */
function countAndSay(n) {
    //用于存储字符串
    let str = "";
    //用于字符串统计后的结果，每轮结束后 buffer 放入 str，达到题目中 “序列中的每一项都是对前一项的描述” 的意思  
    let buffer = "";
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            // 1为初始值单独处理
            str = "1";
            continue;
        }
        else {
            // 用于统计和ch相同字符出现了多少次
            let count = 0;
            // ch为统计哪个字符 
            let ch = str[0];
            while (str.length) { // 若字符串被截断空了统计结束
                if (ch == str[count])
                    count++;
                else {
                    // str[count]字符 与 目标字符不一致
                    // 存在两种情况进入此种， 1：两个字符不同   2：str[count]已经为 undefined (表明到末尾了，越界)
                    buffer += count.toString() + ch; // 对之前统计的成果存入 buffer
                    str = str.substring(count, str.length); // 对字符串进行截断
                    ch = str[0]; // 新的需要统计的字符
                    count = 0; // 统计置为0
                }
            }
        }
        str = buffer; // 把buffer赋值给 str，让其开启下一轮循环
        buffer = ''; // buffer清空
    }
    return str;
}
console.log(countAndSay(3));
