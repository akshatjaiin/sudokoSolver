// Define the Sudoku grid size
const SIZE = 9;

// Define the Sudoku puzzle to solve
let puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

// Function to check if a number can be placed in a cell
function isValid(num, row, col) {
  // Check the row
  for (let i = 0; i < SIZE; i++) {
    if (puzzle[row][i] === num) return false;
  }

  // Check the column
  for (let i = 0; i < SIZE; i++) {
    if (puzzle[i][col] === num) return false;
  }

  // Check the 3x3 sub-grid
  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (puzzle[startRow + i][startCol + j] === num) return false;
    }
  }

  return true;
}

// Function to solve the Sudoku puzzle using backtracking
function solve() {
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (puzzle[i][j] === 0) {
        for (let num = 1; num <= SIZE; num++) {
          if (isValid(num, i, j)) {
            puzzle[i][j] = num;
            if (solve()) return true;
            puzzle[i][j] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

// Solve the Sudoku puzzle
if (solve()) {
  console.log("Solved!");
  console.log(puzzle.map(row => row.join(" ")).join("\n"));
} else {
  console.log("No solution found.");
}
