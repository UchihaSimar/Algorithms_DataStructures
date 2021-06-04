function solution(A) {
  if (A.length == 2) return Math.abs(A[0] - A[1]);
  let leftSum = A[0];

  let rightSum = 0;
  for (let i = 1; i <= A.length - 1; i++) {
    rightSum += A[i];
  }

  let minDiff = Math.abs(leftSum - rightSum);

  for (let i = 1; i <= A.length - 2; i++) {
    leftSum += A[i];
    rightSum -= A[i];
    if (Math.abs(leftSum - rightSum) < minDiff)
      minDiff = Math.abs(leftSum - rightSum);
  }

  return minDiff;
}

console.log(solution([3, 1]));
