let n = "IV";

function converter(s) {

  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }  
  
  let length = s.length

  let number = romanNumerals[s[length - 1]]

  for (let i = 0; i < length - 1; i++) {
    let current = romanNumerals[s[i]]
    let next = romanNumerals[s[i + 1]]

    number = current < next ? number - current : number + current
  }

  return number;

}

console.log(converter(n))
