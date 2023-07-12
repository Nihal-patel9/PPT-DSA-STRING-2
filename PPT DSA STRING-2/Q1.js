
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sToT = {};
  const tToS = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!sToT.hasOwnProperty(charS) && !tToS.hasOwnProperty(charT)) {
      sToT[charS] = charT;
      tToS[charT] = charS;
    } else if (sToT[charS] !== charT || tToS[charT] !== charS) {
      return false;
    }
  }

  return true;
}

// Example usage
const s = "egg";
const t = "add";
const result = isIsomorphic(s, t);
console.log(result); // true