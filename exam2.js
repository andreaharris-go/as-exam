const axis = {
  X: 'x',
  Y: 'y'
}

function lineSum(plots, type, range, rangeOrigin) {
  return plots.filter(
    i => i[type] === range && i[type === axis.X ? axis.Y : axis.X] <= rangeOrigin
  ).length === rangeOrigin
}

function maximumOf(plots, type) {
  return Math.max(...plots.map(o => o[type]))
}

function isAdjacentPlotsInRange(plots, rangeX, rangeY) {
  const maxY = maximumOf(plots, axis.Y)
  const maxX = maximumOf(plots, axis.X)

  for (let i = rangeX; i > 0; i--) {
    if (!lineSum(plots, axis.X, i, maxX)) {
      return false
    }
  }

  for (let i = rangeY; i > 0; i--) {
    if (!lineSum(plots, axis.Y, i, maxY)) {
      return false
    }
  }

  return true
}

function displayResult (plots, rangeX, rangeY, plotName = '') {
  const result = isAdjacentPlotsInRange(plots, rangeX, rangeY)

  console.log(`[${plotName}] rangeX = ${rangeX} rangeY = ${rangeY} -> Ans: ${result}`)
}

const plots1 = [
  {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3},
  {x: 2, y: 1}, {x: 2, y: 2}, {x: 2, y: 3},
  {x: 3, y: 1}, {x: 3, y: 2}, {x: 3, y: 3},
];

const plots2 = [
  {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3},
  {x: 2, y: 1}, {x: 2, y: 2}, {x: 2, y: 3},
  {x: 3, y: 1}, {x: 3, y: 2}, {x: 3, y: 3}, {x: 3, y: 4},
];

const plots3 = [
  {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3},
  {x: 2, y: 2}, {x: 2, y: 3},
  {x: 3, y: 1}, {x: 3, y: 2}, {x: 3, y: 3},
];

displayResult(plots1, 2, 2, 'PLOT 1')
displayResult(plots1, 3, 3, 'PLOT 1')
displayResult(plots1, 3, 4, 'PLOT 1')

displayResult(plots2, 3, 3, 'PLOT 2')
displayResult(plots2, 3, 4, 'PLOT 2')

displayResult(plots3, 3, 3, 'PLOT 3')
displayResult(plots3, 3, 4, 'PLOT 3')