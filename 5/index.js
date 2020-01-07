/**
 * @param {string} s
 * @return {string}
 */

// dp solution
var longestPalindrome = function(s) {
    // form to store result
    const P = []
    if(s.length === 0) return ''
    let maxStr = s[0]
    for(let i = 0;i<s.length;i++) {
      P[i] = []
      for(let j = 0;j<s.length;j++) {
        P[i][j] = null
      }
    }
    for(let i = 0;i < s.length;i++) {
      // every single result is true
      P[i][i] = true
      // set two char also
      if(i!== s.length - 1) {
        const result = s[i] === s[i+1]
        P[i][i+1] = result
        if(result && maxStr.length < 2) {
          maxStr = s.substring(i, i+2)
        }
      }
    }
    for(let len = 3;len<=s.length;len++) {
      for(let p = 0;p<=s.length - len;p++) {
        const result = P[p+1][p+len-2] && (s[p]===s[p+len-1])
        P[p][p+len-1]=result
        if(result && maxStr.length < len) {
          console.log(p, p + len -1)
          maxStr = s.substring(p, p+len)
        }
      }
    }
    return maxStr
  };
