// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordlength = 0 

// The below variables/arrays hold every single potential symbol that is used for a password.
var lowercasecontainer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercasecontainer = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericcontainer = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialcontainer = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "|", "~"]


// __________________FUNCTION GETPASSWORD STARTS HERE__________________________________________________________________________
// This function asks how many characters the user wants to have. This is limited between 8 and 128 and converts the input from a string to a integer.
// https://www.w3schools.com/jsref/jsref_parseint.asp. Double 
function getPassword(){
  let lengthContainer = parseInt(prompt("How many characters do you wish for?"), 10) 
  console.log("lengthcontainer", lengthContainer)
  // The below if statement checks to ensure that the user puts in a number and not letters or symbols when asking for the
  // password length.
  if (isNaN(lengthContainer)){ 
    window.alert("Please enter a number") 
    return;
  }
  if (lengthContainer < 8){
    window.alert("Your password needs to be more than 8 characters.")
    return;

  }
  if (lengthContainer > 128){
    window.alert("Your password needs to be less than 128 characters.")
    return;
  }
// These variables are booleans that will ask conditions from the user and how complex they want their password to be.
  let doesitlowercase = confirm("Do you want lowercases?")
    console.log("value1 ", doesitlowercase)

  let doesituppercase = confirm("Do you want uppercases?")
    console.log("value2 ", doesituppercase)

  let doesitnumeric = confirm("Do you want numbers?")
    console.log("value3 ", doesitnumeric)
  let doesitspecial = confirm("Do you want special characters?")
    console.log("value1 ", doesitspecial)


  var completedpassword = {lengthContainer: lengthContainer, doesitlowercase: doesitlowercase,
  doesituppercase: doesituppercase, doesitnumeric: doesitnumeric, doesitspecial: doesitspecial,}
  return completedpassword;
  // Note to self. When I return completedpassword, that is taken as the endgoal of getPassword. Stop confusing yourself
  // by thinking that you need to do anything further with completedpassword. It's only here as the end return result to come
  // from the getPassword function. YOU WERE STUCK HERE FOR DAYS CAUSE YOU KEPT TRYING TO MAKE ADDITIONAL FUNCTIONS FOR THIS.
}
// __________________FUNCTION GETPASSWORD ENDS HERE__________________________________________________________________________

// Note to self: Deep dive more into how scope works, this was a roadblock for way too long.
function generatePassword(){
  let option = getPassword()
  var MasterPasswordArray = []
  if (!option){
    console.log("generatePassword returned null")
    return null;   
  } else if(option.doesitlowercase === false && option.doesituppercase === false && option.doesitnumeric === false 
    && option.doesitspecial === false){
    window.alert("You need to include one selection, please try again.")
    console.log("Did we hit the else if?")
    var Error = document.querySelector("#password")
    Error.value = "Please try again"
    return Error.value;
  }
  else {
      if (option.doesitlowercase === true){
        MasterPasswordArray.push(...lowercasecontainer);
        console.log("Password includes lowercase");
      }
      if (option.doesituppercase === true){
        MasterPasswordArray.push(...uppercasecontainer);
        console.log("Password includes uppercasecase");
      }
      if (option.doesitnumeric === true){
        MasterPasswordArray.push(...numericcontainer);
        console.log("Password includes numbers");
      }
      if (option.doesitspecial === true){
        MasterPasswordArray.push(...specialcontainer);
        console.log("Password includes special characters");
      }

// For the below I referenced this https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array and
// copied some code from one of our previous activities. I also include an IF statement if someone was to select "no" to all
// of the options in building out their password.
  var finalpassword = "";
  console.log("Finalpassword", finalpassword);
  for (var i = 0; i < option.lengthContainer; i++){
    var randompassword = Math.floor(Math.random() * MasterPasswordArray.length);
    finalpassword +=MasterPasswordArray[randompassword]
  }
    return finalpassword;
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

