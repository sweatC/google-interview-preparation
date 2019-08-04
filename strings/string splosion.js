/*
  Link to the task:
  https://codingbat.com/prob/p117334
*/

const str = "code";

const stringSplosion = (str) => {
  let res = '';
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j <= i; j++) {
      res += str[j];
    }
  }

  return res;
}

console.log(stringSplosion(str) == "ccocodcode");
