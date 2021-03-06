/**
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

示例 1:
输入: s = "anagram", t = "nagaram"
输出: true

示例 2:
输入: s = "rat", t = "car"
输出: false
 */

function isAnagram(s: string, t: string): boolean {
    let sArr = s.split('')
    sArr.sort()
    s = sArr.join('')

    let tArr = t.split('')
    tArr.sort()
    t = tArr.join('')

    if(s === t){
        return true
    }else{
        return false
    }    
}

console.log(isAnagram("aaae","aaat"))
