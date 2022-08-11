// Change code below this line
function findMatches(anyNumber, ...args) {
  const matches = []; // Don't change this line
   for (arg of args) {
   if (arg === anyNumber) {
     matches.push(arg);
   }
   }
  // Change code above this line
  return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));