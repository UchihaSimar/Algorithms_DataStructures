function solution(A) {
  let strArr = A.split("");
  for (let i = 0, j = strArr.length - 1; i <= j; i++, j--) {
    if (strArr[i] !== strArr[j]) return 0;
  }
  return 1;
}

console.log(solution("{[()()]}"));
console.log(solution("([)()]"));
