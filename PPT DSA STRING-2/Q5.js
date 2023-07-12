function reverseStr(s, k) {
  const chars = s.split("");
  let i = 0;

  while (i < chars.length) {
    reverseRange(chars, i, i + k - 1);
    i += 2 * k;
  }

  return chars.join("");
}

function reverseRange(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Example usage
const s = "abcdefg";
const k = 2;
const result = reverseStr(s, k);
console.log(result); // "bacdfeg"