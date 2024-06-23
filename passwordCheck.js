function minimumNumber(password) {
  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";

  let hasDigit = false;
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasSpecialChar = false;

  for (let char of password) {
    if (numbers.includes(char)) hasDigit = true;
    if (lower_case.includes(char)) hasLowerCase = true;
    if (upper_case.includes(char)) hasUpperCase = true;
    if (special_characters.includes(char)) hasSpecialChar = true;
  }

  let missingTypes = 0;
  if (!hasDigit) missingTypes++;
  if (!hasLowerCase) missingTypes++;
  if (!hasUpperCase) missingTypes++;
  if (!hasSpecialChar) missingTypes++;

  const minLength = 6;
  const lengthDeficit = minLength - password.length;

  return Math.max(missingTypes, lengthDeficit);
}

console.log(minimumNumber("Ab1")); 
// Output: 3
console.log(minimumNumber("#HackerLand")); 
// Output: 1
