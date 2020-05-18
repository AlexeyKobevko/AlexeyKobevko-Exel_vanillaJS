const CODES = {
  A: 65,
  Z: 90,
}

const ROWS_COUNT = 15

function toCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function toColumn(col) {
  return `
    <div class="column">${col}</div>
  `
}

function createRow(rowNumber, content) {
  return `
    <div class="row">
      <div class="row-info">${rowNumber ? rowNumber : ''}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = ROWS_COUNT) {
  const colsCounts = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCounts).fill('').map(toChar).map(toColumn).join('')

  rows.push(createRow(null, cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCounts).fill('').map(toCell).join('')
    rows.push(createRow(i + 1, cells))
  }

  return rows.join('')
}
