// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}

// Testing function

function generatePassword() {
  console.log("Hello");}

var arrayA = [1, 2, 3];
var arrayB = ["a", "b", "c"];
var arrayC = ["!", "@", "#"];

var arrayD = arrayA.concat(arrayB).concat(arrayC)
console.log (arrayD)

// Defining which characters will be included

  var characters=prompt("How many characters? (8-128 Characters)")
    if (characters >=8 && characters <=128) {
      console.log (characters);
    
    
  var lowerCase=confirm("Lower Case Required?");
    // if (lowerCase==true) {
    // console.log("Bananas")
    // }
    // else {
    //   console.log("Cookies")
    // }
  var upperCase=confirm("Upper Case Required?");
  var numeric=confirm("Numeric Required?");
  var specialChar=confirm("Special Charactars Required?");
    }
  else   {(alert ("Check number of Characters"));

    }
// prompt if no characters are chosen
  if (upperCase === false && lowerCase === false && Numeric === false && specialChar === false) {
        alert("Please select at least one character type.")
  }
// arrays for the different character types
    var lowerCaseArray=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var upperCaseArray=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var numericArray=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var specialCharArray=["!", "@", "#", "$", "%", "^", "&", "*", "_", "+", "(", ")", "{", "}", "[", "]", ";", "'", ".", "<", ">", "?", "/"]

 

var passwordCharactersArray=[]

// array generator for all character types
  if (specialChar==true && upperCase==true && lowerCase==true && numeric==true) {
  passwordCharactersArray=specialCharArray.concat(upperCaseArray).concat(lowerCaseArray).concat(numericArray);
  }
// array generator for three character types
  else if (lowerCase==true && numeric==true && specialChar==true) {
  passwordCharactersArray=lowerCaseArray.concat(numericArray).concat(specialCharArray);
  }
  
  else if (upperCase==true && numeric==true && specialChar==true) {
  passwordCharactersArray=upperCaseArray.concat(numericArray).concat(specialCharArray);
  }
  
  else if (upperCase==true && lowerCase==true && specialChar==true) {
  passwordCharactersArray=upperCaseArray.concat(lowerCaseArray).concat(specialCharArray);
  }
  
  else if (upperCase==true && lowerCase==true && numeric==true) {
  passwordCharactersArray=upperCaseArray.concat(lowerCaseArray).concat(numericArray);
  }
  // array generator for two character types
  else if (upperCase==true && lower==true) {
  passwordCharactersArray=upperCaseArray.concat(lowerCaseArray);
  }

  else if (upperCase=true && specialChar==true) {
  passwordCharactersArray=upperCaseArray.concat(specialCharArray);
  }

  else if (lowerCase==true && numeric==true) {
  passwordCharactersArray=lowerCaseArray.concat(numericArray);
  }

  else if (lowerCase==true && specialChar==true) {
  passwordCharactersArray=lowerCaseArray.concat(specialCharArray);
  }

  else if (specialChar==true && numeric==true) {
  passwordCharactersArray=specialCharArray.concat(numericArray);
  }

  else if (upperCase==true && numeric==true) {
  passwordCharactersArray=upperCaseArray.concat(numericArray);
  }
/// array generator for one character type
  else if (lowerCase==true) {
  passwordCharactersArray=lowerCaseArray;
  }  
  
  else if (upperCase==true) {
  passwordCharactersArray=upperCaseArray;
  }
  
  else if (numeric==true) {
  passwordCharactersArray= numericArray;
  }
  
  else if (specialChar==true) {
  passwordCharactersArray=specialCharArray;
  }
  
 
  
  console.log (passwordCharactersArray);

  console.log (characters)

  // setting parameters for number of characters
for (var i=0; i<=characters; i++) {
    console.log ("I am " + i)

    // console.log(len(passwordCharactersArray))
}

 
// password variable is an array placeholder for the length of the password
// I got help for the next three sections with other answers on GitHub
    var password = [];

    
    //  selection of characters for password 
    for (var i = 0; i < characters; i++) {
        var pickChoices = passwordCharactersArray[Math.floor(Math.random() * passwordCharactersArray.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var ps = password.join("");
    UserInput(ps);
    // return ps;

// putting password in text box.
function UserInput(ps) {
    document.getElementById("password").textContent = ps;


// for (var i = 0; i < characters; i++) {
//  password = passwordCharactersArray[Math.floor(Math.random()*passwordCharactersArray)] 
//  }



  console.log (password)

// //     someRandomLetter=math.floor (math.random()*26);
// //     someRandomNumeric=math.floor (math.random()*10);
// //     someRandomLetter=math.floor (math.random()*28);

// //     console.log(lowerCaseArray[someRandomLetter]);

// // }

// // // Add event listener to generate button

// generateBtn.addEventListener("click", generatePassword);
}