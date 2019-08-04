/* 
   Link to the task: 
   https://techdevguide.withgoogle.com/paths/foundational/find-longest-word-in-dictionary-that-subsequence-of-given-string/#!
*/

const S = "abppplee";
const D = ["able", "ale", "apple", "bale", "kangaroo"];

const findLongestSubsequence = (s, d) => {
  let index, temp;
  let maxLen = 0;
  for(let i = 0; i < d.length; i++) {
    temp = s;
    for(let j = 0, len = d[i].length; j < len; j++) {
      index = temp.indexOf(d[i][j]);
      if(index == -1) break;
      temp = temp.slice(index+1);
      if(j == len-1) {
        maxLen = maxLen > len ? maxLen : len;
      }
    }
  }

  return maxLen;
}

console.log(findLongestSubsequence(S, D) == 5)
