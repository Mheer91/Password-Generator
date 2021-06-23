

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Pre-Determining password criteria with variables.
var ucLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lcLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specChars = ["!","@","#","$","%","&"];
var num = ["1","2","3","4","5","6","7","8","9","0"];
var pwChars = [];
var pwString = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword() {
  //Used parse int to return a number value instead of a string value. Without this the value defaults to string which the for loop at the bottom can't read.
  let pwLength = parseInt(prompt("Determine the length of your password by entering a number between 8 and 128"));
  //Password length confirmation. Page will reload and restart if the value isn't correct.
  if (pwLength < 8 || pwLength > 128){
    alert("WARNING: PASSWORD MUST BE BETWEEN 8 AND 128 CHARACTERS. PLEASE ENTER A VALID NUMBER!");
    location.reload();
  } 
  //Asking user to define remaining paramaters.
  else {
    var upperCase = confirm("Would you like to use upper case letters?");
    var lowerCase = confirm("Would you like to use lower case letters?");
    var specialCharacters = confirm("Would you like to use special characters?");
    var numbers = confirm("Would you like to use numbers?");
  }
  //Every potential user input outcome. If none are selected, page reloads and restarts.
  if (!upperCase && !lowerCase && !specialCharacters && !numbers) {
    alert("YOU MUST CHOOSE AT LEAST ONE PARAMATER!");
    location.reload();
  } 
  else if (upperCase && lowerCase && specialCharacters && numbers) {
    pwChars = ucLetters.concat(lcLetters, specChars, num, pwChars);
  } 
  else if (upperCase && lowerCase && specialCharacters) {
    pwChars = ucLetters.concat(lcLetters, specChars);
  }
  else if (upperCase && lowerCase && numbers) {
    pwChars = ucLetters.concat(lcLetters, num);
  }
  else if (upperCase && specialCharacters && numbers) {
    pwChars = ucLetters.concat(specChars, num);
  }
  else if (lowerCase && specialCharacters && numbers) {
    pwChars = lcLetters.concat(specChars, num);
  }
  else if (upperCase && lowerCase) {
    pwChars = ucLetters.concat(lcLetters);
  }
  else if (upperCase && specialCharacters) {
    pwChars = ucLetters.concat(specChars);
  }
  else if (upperCase && numbers) {
    pwChars = ucLetters.concat(num);
  }
  else if (lowerCase && specialCharacters) {
    pwChars = lcLetters.concat(specChars);
  }
  else if (lowerCase && numbers) {
    pwChars = lcLetters.concat(num);
  }
  else if (specialCharacters && numbers) {
    pwChars = specChars.concat(num);
  }
  else if (upperCase) {
    pwChars = ucLetters;
  }
  else if (lowerCase) {
    pwChars = lcLetters;
  }
  else if (specialCharacters) {
    pwChars = specChars;
  }
  else if (numbers) {
    pwChars = num;
  };


  //Pulls random items from the established arrays based on the outcome of the paramaters above.
  for (i = 0; i < pwLength; i++){
    var randomPw = Math.floor(Math.random()*pwChars.length);
    pwString += pwChars[randomPw];
    console.log(pwString);
  } return pwString;
}; 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
