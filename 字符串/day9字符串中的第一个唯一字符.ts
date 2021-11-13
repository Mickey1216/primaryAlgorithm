/**
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

示例1：
s = "leetcode"
返回 0

示例2：
s = "loveleetcode"
返回 2
 
提示：你可以假定该字符串只包含小写字母。
 */

function firstUniqChar(s: string): number {
    for(let i=0;i<s.length;i++){
        if(s.lastIndexOf(s[i]) === s.indexOf(s[i])){
            return i
        }
    }

    return -1
}

console.log(firstUniqChar("lll"))
