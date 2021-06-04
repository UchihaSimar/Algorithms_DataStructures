function solution(arr, k) {
  let result = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    let new_index = (i + k) % arr.length;
    result[new_index] = arr[i];
  }
  return result;
}

console.log(solution([3, 8, 9, 7, 6], 3));
console.log(solution([0, 0, 0], 1));
console.log(solution([1, 2, 3, 4], 4));
