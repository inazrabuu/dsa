var solveSudoku = function(board) {
    const rowMask = Array(9).fill(0),
          colMask = Array(9).fill(0),
          subMask = Array(3).fill().map(() => Array(3).fill(0))

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] !== '.') {
                const d = parseInt(board[i][j] - 1)
                const b = 1 << d
                rowMask[i] |= b
                colMask[j] |= b
                subMask[Math.floor(i / 3)][Math.floor(j / 3)] |= b
            }
        }
    }

    function backtrack(row, col) {
        if (row === 9)
            return true

        const nextRow = col === 8? row + 1 : row,
              nextCol = col === 8? 0 : col + 1

        if (board[row][col] !== '.')
            return backtrack(nextRow, nextCol)

        for (let digit = 0; digit < 9; digit++) {
            const bit = 1 << digit,
                  subRow = Math.floor(row / 3),
                  subCol = Math.floor(col / 3)

            if ((rowMask[row] & bit) || (colMask[col] & bit) || (subMask[subRow][subCol] & bit))
                continue

            board[row][col] = (digit + 1).toString()
            rowMask[row] |= bit
            colMask[col] |= bit
            subMask[subRow][subCol] |= bit

            if (backtrack(nextRow, nextCol))
                return true

            board[row][col] = '.'
            rowMask[row] &= ~bit
            colMask[col] &= ~bit
            subMask[subRow][subCol] &= ~bit
        }

        return false
    }

    backtrack(0, 0)
}

let board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
console.log(board)
solveSudoku(board)
console.log(board)