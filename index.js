
function sum(fromN, toN) {
  if(fromN > toN) return 0;
  if(fromN === toN) return fromN;

  return fromN + sum(fromN + 1, toN - 1) + toN;
}

module.exports = sum;