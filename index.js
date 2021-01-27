function generateMaze(n) {
  let board = [];
  let S = 4 * n - 1;
  for (let i = 0; i < S; i++) {
    board.push([]);
    for (let j = 0; j < S; j++) {
      if (i % 2 == 0) {
          if (i % 4 == 0 && j != 1){ 
              board[i].push("@");
          } else if (i % 4 != 0 && j != S - 2) { 
              board[i].push("@");
          } 
          else { 
              board[i].push(" ");
          }
      } else {
        if (j == 0 || j == S - 1) {
          board[i].push("@");
        } else {
          board[i].push(" ");
        }
      }
    }
  }
  return board;
}
console.table(generateMaze(3));
console.table(generateMaze(4));

