"use strict";
/**
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:
输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串

示例 2:
输入: "race a car"
输出: false
解释："raceacar" 不是回文串
 */
function isPalindrome(s) {
    //空字符串
    if (s.length === 0)
        return true;
    //转为小写字母,去掉空格和非英文字母
    s = s.toLocaleLowerCase();
    s = s.replace(/[^a-zA-Z0-9]/g, '');
    s = s.replace(/\s/g, '');
    console.log(s);
    let revArr = s.split('').reverse();
    let s_rev = revArr.join('');
    if (s === s_rev) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPalindrome("A man, a plan, a canal: Panama@!953-_=++"));
