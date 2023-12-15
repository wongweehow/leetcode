let p = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]];

function findDestination(paths) {
  pathLength = paths.length;

  for (let i = 0; i < pathLength; i++) {

    let checker = 0;

    for (let j = 0; j < pathLength; j++) {
      checker = paths[i][1] === paths[j][0] ? checker + 1 : checker + 0 
    }

    if (checker === 0) {
      return paths[i][1]
    } else {
      continue
    }

  }
}


console.log(findDestination(p))
