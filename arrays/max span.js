/*
  Link to the task:
  https://codingbat.com/prob/p189576
*/

const arr = [1, 4, 2, 1, 4, 4, 4];

const maxSpan = arr => {
  let max = 0;
  let index, lastIndex, len;
  for(let i = 0; i < arr.length; i++) {
    index = arr.indexOf(arr[i]);
    lastIndex = arr.lastIndexOf(arr[i]);
    len = lastIndex - index + 1;
    max = max > len ? max : len;
  }

  return max;
}

console.log(maxSpan(arr) == 6);
