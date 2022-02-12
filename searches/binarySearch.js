const binarySearch = (list, e) => {
  let start = 0;
  let end = list.length - 1;
  let mid;
  let pos = -1;

  while(start <= end) {
    mid = Math.floor((start + end) / 2);
    if (list[mid] === e) {
      pos = mid;
      break;
    }
    else if (list[mid] > e) end = mid - 1;
    else start = mid + 1;
  }

  return pos;
};
