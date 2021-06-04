function solution(A) {
  let sum = ((A.length + 1) * (A.length + 2)) / 2;
  for (let i = 0; i <= A.length - 1; i++) sum -= A[i];
  return sum;
}
console.log(solution([2, 3, 1, 5]));
