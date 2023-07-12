function rotateString(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  const sConcat = s + s;

  if (sConcat.includes(goal)) {
    return true;
  }

  return false;
}

// Example usage
const s = "abcde";
const goal = "cdeab";
const result = rotateString(s, goal);
console.log(result); // true