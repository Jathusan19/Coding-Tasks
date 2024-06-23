function caesarCipher(s, k) {
  let encryptedString = "";
  const normalizedShift = k % 26;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char >= "a" && char <= "z") {
      let shiftedCharCode =
        ((char.charCodeAt(0) - 97 + normalizedShift) % 26) + 97;
      encryptedString += String.fromCharCode(shiftedCharCode);
    } else if (char >= "A" && char <= "Z") {
      let shiftedCharCode =
        ((char.charCodeAt(0) - 65 + normalizedShift) % 26) + 65;
      encryptedString += String.fromCharCode(shiftedCharCode);
    } else {
      encryptedString += char;
    }
  }

  return encryptedString;
}

console.log(caesarCipher("There is s-a-starman-waiting-in-the-sky", 3));
// Output: "Wkhuh'v v-d-vwdupdq-zdlwlqj-lq-wkh-vnb"
console.log(caesarCipher("middle-Outz", 2));
// Output: "okffng-Qwvb"
