// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

;

var possibleChar = []
// Function to prompt user for password options
function getPasswordOptions() {
  
  var passwordCharacters = prompt("How many characters do you want in your password?");

  if (passwordCharacters >= 10 && passwordCharacters <= 64) {

    var addSC = confirm("Do you want special characters in your password?")
    if (addSC == true) {
      var randomSC = getRandomSc()
      possibleChar = possibleChar.concat(specialCharacters)
    }

    var addUpperCase = confirm("Do you want upper case characters in your password?")
    if (addUpperCase == true) {
      var randomUpper = getRandomUpper()
      possibleChar = possibleChar.concat(upperCasedCharacters)
    }

    var addNumbers = confirm("Do you want numbers in your password?");
    if (addNumbers == true) {
      var randomNumber = getRandomNumber()
      possibleChar = possibleChar.concat(numericCharacters)
    }

    addLowerCase = confirm("Do you want lower case characters in your password?");
    if (addLowerCase == true) {
      var randomLower = getRandomLower()
      possibleChar = possibleChar.concat(lowerCasedCharacters)
    }
    ;
   
    var password = ""
    for (var i = 0; i < passwordCharacters; i++) {
      var randomPossible= getRandomPossible ()
      console.log(randomPossible)
      password = password + randomPossible
    }
    return password 
  }








  else if (getPasswordOptions.passwordCharacters <= 10 || getPasswordOptions.passwordCharacters >= 64) {
    alert("password length should be 10-64 characters")
  }

  else alert("please input a number within 10 and 64");
  return;
}



function getRandomPossible() {
  return (possibleChar[Math.floor(Math.random() * possibleChar.length)]);
}

// Function for getting a random element from an array
function getRandomLower() {
  return (lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)]);
}
function getRandomUpper() {
  return (upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)]);
}
function getRandomNumber() {
  return (numericCharacters[Math.floor(Math.random() * numericCharacters.length)]);
}
function getRandomSc() {
  return (specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
}

// Function to generate password with user input
function generatePassword() {
  return getPasswordOptions();

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
