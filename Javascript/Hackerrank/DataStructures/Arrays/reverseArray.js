const findPair = (n, sum) => {
  let map = new Map();
  n.forEach((item) => {
    if (map.has(sum - item)) return [map[sum - item], item];
    map.set(item, sum - item);
  });
};

console.log(findPair([1, 2, 3, 4, 5, 6, 7], 5));
