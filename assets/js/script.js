// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Ask user for
function generatePassword(){
  var userPasswordLength = window.prompt("Choose a length of at least 8 - 128 characters.");
  var userLowercase = window.prompt("Would you like lowercase in your password enter 'y' for yes and 'n' for no.");
  var userUppercase = window.prompt("Would you like uppercase in your password enter 'y' for yes and 'n' for no.");
  var userNumber = window.prompt("Would you like numbers in your password enter 'y' for yes and 'n' for no.");
  var userSpecialChar = window.prompt("Would you like special characters in your password enter 'y' for yes and 'n' for no.");

  var lowercaseCharCodes = createArrayFromCharCodesTable(97, 122);
  var uppercaseCharCodes = createArrayFromCharCodesTable(65, 90);
  var numberCharCodes = createArrayFromCharCodesTable(48, 57);
  var specialCharCodes = createArrayFromCharCodesTable(33, 47).concat(createArrayFromCharCodesTable(58, 64));
  // console.log(lowercaseCharCodes);
  // console.log(uppercaseCharCodes);

  var characterCode = [];
  if(userLowercase === "y"){
    characterCode = characterCode.concat(lowercaseCharCodes);
  }
  if(userUppercase === "y"){
    characterCode = characterCode.concat(uppercaseCharCodes);
  } 
  if(userNumber === "y"){
    characterCode = characterCode.concat(numberCharCodes);
  }
  if(userSpecialChar === "y"){
    characterCode = characterCode.concat(specialCharCodes);
  }
  // console.log(characterCode);

  
  return "Its working!!!";
}

// Create array for character codes table
function createArrayFromCharCodesTable(low, high){
  var charCodeArray = [];
  for (var i = low; i <= high; i++){
    charCodeArray.push(i);
  }
  return charCodeArray;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page