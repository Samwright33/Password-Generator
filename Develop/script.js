// Assignment code here
var output = document.getElementById("demo");
var slider = document.getElementById("passwordLength");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*"];
var availableValues = []

const generatePassword = (length) => {
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
 
console.log(availableValues);

 let password = "";

  if(availableValues.length === 0) {
return "Please try again";
  }

  for(let i = 0; i <length; i++){
    const randomValue = Math.floor(Math.random() * availableValues.length);
    password += availableValues[randomValue];
  }
  console.log(password);
return password;

}

function writePassword() {
  var length = slider.value;
  console.log(length)
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
