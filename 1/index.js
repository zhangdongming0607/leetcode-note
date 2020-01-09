/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {}
  for(let i = 0;i<nums.length;i++) {
    map[nums[i]] = map[nums[i]] ? [...map[nums[i]], i] : [i]
  }
  for(let i = 0;i<nums.length;i++) {
    if(map[target - nums[i]]) {
      if(2*nums[i]=== target) {
        if(map[nums[i]].length > 1) {
          return map[nums[i]].slice(0, 2)
        }
        continue;
      }
      return [i, map[target - nums[i]]]
    }
  }
};
// @lc code=end
