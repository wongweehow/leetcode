function rowColDiff(grid) {

  let rowLength = grid.length
  let colLength = grid[0].length

  let diff = []
  let sumRow = []
  let sumCol = []

  for (let i = 0; i < rowLength; i++) {
    sumRow.push(0);
    for (let j = 0; j < colLength; j++) {
      grid[i][j] ? sumRow[i]++ : sumRow[i]--
    }
  }

  for (let i = 0; i < colLength; i++) {
    sumCol.push(0);
    for (let j = 0; j < rowLength; j++) {
      grid[j][i] ? sumCol[i]++ : sumCol[i]--
    }
  }

  for (let i = 0; i < rowLength; i++) {
    let subGrid = [];
    for (let j = 0; j < colLength; j++) {
      subGrid.push(sumRow[i] + sumCol[j])
    }
    diff.push(subGrid)
  }

  console.log(diff)
}

rowColDiff([[0,1,1],[1,0,1],[0,0,1]])
