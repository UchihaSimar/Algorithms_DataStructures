function solution(A) {
  var min = 1;
  A.sort(function (a, b) {
    // Sort the array explicit way
    return a - b;
  });

  for (var i in A) {
    if (A[i] > -1 && A[i] == min) {
      min++;
    }
  }

  return min;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
