// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Get users input and create a password with the users criteria
function generatePassword() {
	var userPasswordLength = window.prompt(
		"Choose a length of at least 8 - 128 characters."
	);
	const intLength = parseInt(userPasswordLength, 10);
	if (typeof intLength === "number" && (intLength < 8 || intLength > 128)) {
		alert("Hmm that number is not between 8 and 128. Please try again!");
		return "PLEASE TRY AGAIN";
	} else if (!intLength) {
		alert("Hmmm that isn't a number please try again!");
		return "PLEASE TRY AGAIN";
	}
	var userLowercase = window.prompt(
		"Would you like lowercase in your password " +
			"enter 'y' for yes and 'n' for no."
	);
	var userUppercase = window.prompt(
		"Would you like uppercase in your password " +
			"enter 'y' for yes and 'n' for no."
	);
	var userNumber = window.prompt(
		"Would you like numbers in your password " +
			"enter 'y' for yes and 'n' for no."
	);
	var userSpecialChar = window.prompt(
		"Would you like special characters in your password " +
			"enter 'y' for yes and 'n' for no."
	);

	// Create array with user input
	var generateCharCode = [];
	if (userLowercase === "y") {
		var lowercaseCharCodes = createArrayFromCharCodesTable(97, 122);
		generateCharCode = generateCharCode.concat(lowercaseCharCodes);
		// Check to see if the arrays are created
		// console.log(lowercaseCharCodes);
	}
	if (userUppercase === "y") {
		var uppercaseCharCodes = createArrayFromCharCodesTable(65, 90);
		generateCharCode = generateCharCode.concat(uppercaseCharCodes);
		// Check to see if the arrays are created
		// console.log(uppercaseCharCodes);
	}
	if (userNumber === "y") {
		var numberCharCodes = createArrayFromCharCodesTable(48, 57);
		generateCharCode = generateCharCode.concat(numberCharCodes);
		// Check to see if the arrays are created
		// console.log(numberCharCodes);
	}
	if (userSpecialChar === "y") {
		var specialCharCodes = createArrayFromCharCodesTable(33, 47).concat(
			createArrayFromCharCodesTable(58, 64)
		);
		generateCharCode = generateCharCode.concat(specialCharCodes);
		// Check to see if the arrays are created
		// console.log(specialCharCodes);
	}
	// Check to see if generateCharCode is created
	// console.log(generateCharCode);

	// Create the password with user input
	var generatePasswordChar = [];
	for (var i = 0; i < userPasswordLength; i++) {
		var passwordCharCode =
			generateCharCode[Math.floor(Math.random() * generateCharCode.length)];
		generatePasswordChar.push(String.fromCharCode(passwordCharCode));
	}

	return generatePasswordChar.join("");
}

// Create array for character codes table
function createArrayFromCharCodesTable(low, high) {
	var charCodeArray = [];
	for (var i = low; i <= high; i++) {
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
