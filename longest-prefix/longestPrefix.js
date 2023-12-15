// let s = ["flaower","flaow","flaight"]
let s = ["flower"]

function findLongestPrefix(strs) {

  if (!strs[0]) {
    return ""
  } 

  let firstStringLength = strs[0].length
  let strsLength = strs.length

  let counter = 0;

  for (let i = 0; i < firstStringLength; i++) {
    let checker = 0;
    for (let j = 0; j < strsLength; j++) {
      checker = strs[0][i] === strs[j][i] ? checker + 1 : checker
    }
    
    if (checker === strsLength) {
      counter++
    } else {
      return counter === 0 ? "" : strs[0].slice(0, counter)
    }

  }

  return strs[0]
}

console.log(findLongestPrefix(s))
