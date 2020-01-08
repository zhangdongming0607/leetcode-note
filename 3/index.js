/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

  // slide window
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0
    let max = 1
    let left = 0
    const map = {[s[0]]: 0} // key: char val,val: index
    for(let i = 1;i<s.length;i++) {
      if(map[s[i]] !== undefined) {
        //math.max:  should confirm left pad slide to right
        left = Math.max(map[s[i]]+1, left)
      }
      map[s[i]] = i
      max = Math.max(max, i - left + 1)
    }
    return max
  };
