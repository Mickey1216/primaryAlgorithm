/**
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效
有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
 
示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false

示例 4：
输入：s = "([)]"
输出：false

示例 5：
输入：s = "{[]}"
输出：true
 */

function isValid(s: string): boolean {
    //利用栈解决
    const res = []
    const left = ['(','[','{'] //左括号
    const map:any = {
        ')':'(',
        ']':'[',
        '}':'{'
    }

    //左括号入栈，右括号出栈
    for(let i=0;i<s.length;i++){
        let item = s[i]
        if(left.includes(item)){
            res.push(item)
        }else{
            let top = res[res.length-1]
            if(top === map[item]){
                res.pop()
            }else{
                return false
            }
        }
    }

    return res.length === 0
}

console.log(isValid("()[]{}"))

