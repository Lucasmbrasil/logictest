const distinctNumbers = (arr) => {
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (!numbers.includes(arr[i])) {
      numbers.push(arr[i]);
    }
  }
  return numbers.length;
};
