const chocolates = (n, m) => {
  sum = 0;
  count = 0;
  pieces = [];
  for (let i = 0; i < n; i++) {
    if (sum < n) {
      !pieces.includes(sum) && count++;
      pieces.push(sum);
      sum = sum + m;
    } else {
      sum = sum - n;
    }
  }
  console.log(pieces);
  return count;
};
