function processString(str) {
  const processed = [];

  for (const char of str) {
    if (char === "#") {
      processed.pop();
    } else {
      processed.push(char);
    }
  }

  return processed.join("");
}

function areEqualAfterBackspace(s, t) {
  const processedS = processString(s);
  const processedT = processString(t);

  return processedS === processedT;
}

// Example usage
const s = "ab#c";
const t = "ad#c";
const result = areEqualAfterBackspace(s, t);
console.log(result); // true