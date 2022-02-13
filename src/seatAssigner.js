// store seats as dict with group ids pointing to seating assignments
let seats = {};
const COLUMNS = ["A", "B", "C", "D", "E", "F", "G"];

function seatAssigner(inputStr) {
  const groupId = Object.keys(seats).length;
  seats[groupId] = [];
  
  let i = Object.values(seats).flat().length;
  const target = parseInt(inputStr)+Object.values(seats).flat().length;

  for(i; i<target; i++) {
    let row = Math.ceil((Object.values(seats).flat().length + 1) / COLUMNS.length);
    let column = COLUMNS[Object.values(seats).flat().length % COLUMNS.length];
    seats[groupId].push(`${row}${column}`);
  }

  // console.dir(seats);
  return seats[groupId];
}

module.exports = seatAssigner;
