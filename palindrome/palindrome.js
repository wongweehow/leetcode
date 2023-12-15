function func(n) {
  let string = String(n)
  let totalIndex = string.length - 1

  if (totalIndex == 0) {
    return true;
  }

  let lastIndex = totalIndex

  for (let i = 0; i < totalIndex; i++) {

    if (string[i] === string[lastIndex]) {
      if (lastIndex - i <= 1) {
        return true;
      } else {
        lastIndex--;
      }
    } else {
      return false;
    }
    
  }
}

console.log(func("115"))
