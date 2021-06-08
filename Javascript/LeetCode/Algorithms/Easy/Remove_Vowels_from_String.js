const removeVowels = (str) => {
  let data = ["a", "e", "i", "o", "u"];
  let result_string = "";
  for (let ele of str) {
    if (data.indexOf(ele) == -1) result_string += ele;
  }
  return result_string;
};
console.log(removeVowels("simar"));
