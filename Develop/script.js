// Assignment code here
// Added the slider bar for password length range
var output = document.getElementById("demo");
var slider = document.getElementById("passwordLength");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

// Created my variables and arrays containing the available characters to use in the password
var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*"];

// Added if statements to ask the user which available characters to use in their password
const generatePassword = (length) => {
var availableValues = [];
 if (confirm("Would you like uppercase letters?")) {
availableValues = availableValues.concat(uppercase)
 }

 if (confirm("Would you like lowercase letters?")) {
 availableValues = availableValues.concat(lowercase)
}

if (confirm("Would you like numbers?")) {
  availableValues = availableValues.concat(numbers)
 }

 if (confirm("Would you like special characters?")) {
  availableValues = availableValues.concat(special)
 } 

 // Displays available values in the console
 // Made the user try again if no available values were selected
console.log(availableValues);

 let password = "";

  if(availableValues.length === 0) {
return "Please try again";
  }

  // Added a for loop to generae a random character from the selected criteria
  for(let i = 0; i <length; i++){
    const randomValue = Math.floor(Math.random() * availableValues.length);
    password += availableValues[randomValue];
  }
  console.log(password);
return password;

}

// Added function to write the password given these variables and event listener
function writePassword() {
  var length = slider.value;
  console.log(length)
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
