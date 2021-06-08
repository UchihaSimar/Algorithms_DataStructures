/*
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs. 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let result = 0;
  nums.forEach((number, index) => {
    index = nums.indexOf(number, index + 1);
    while (index > 0) {
      result++;
      index = nums.indexOf(number, index + 1);
    }
  });
  return result;
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
