function solution(N) {
  // Tests if N is an integer
  // Tests if N is within range
  if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
    let max_length = 0;
    // remove trailing zeroes
    let without_Zero_String = Number(N)
      .toString(2)
      .replace(/^0+|0+$/g, "");
    //if no 0's are left return 0
    if (without_Zero_String.indexOf("0") === -1) return max_length;

    //split the string
    let without_Zero_String_split = without_Zero_String.split("1");
    for (const ele of without_Zero_String_split) {
      if (ele) {
        max_length = ele.length > max_length ? ele.length : max_length;
      }
    }

    return max_length;
  }

  // default if it doesn't meet the requirements
  return 0;
}

console.log(solution(9));
console.log(solution(529));
console.log(solution(20));
console.log(solution(15));
console.log(solution(32));
console.log(solution(1041));
