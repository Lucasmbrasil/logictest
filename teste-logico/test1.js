const numberUnpaired = (arr) => {
  let auxObject = {};
  for (let i = 0; i < arr.length; i++) {
    if (auxObject[arr[i]] === undefined) {
      auxObject[arr[i]] = 1;
    } else {
      auxObject[arr[i]] += 1;
    }
  }
  for (const count in auxObject) {
    if (auxObject[count] % 2 !== 0) {
      return count;
    }
  }
};
