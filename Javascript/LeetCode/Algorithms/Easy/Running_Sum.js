/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums. 
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  for (let i = 0; i <= nums.length - 2; i++) {
    nums[i + 1] = nums[i] + nums[i + 1];
  }
  return nums;
};
console.log(runningSum([3, 1, 2, 10, 1]));
