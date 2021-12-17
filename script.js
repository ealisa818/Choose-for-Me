// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}
function generatePassword() {
  console.log("Hello");}

var arrayA = [1, 2, 3];
var arrayB = ["a", "b", "c"];
var arrayC = ["!", "@", "#"];

var arrayD = arrayA.concat(arrayB).concat(arrayC)
console.log (arrayD)

  var characters=prompt("How many characters? (8-128 Characters)")
    if (characters >=8 && characters <=128) {
      console.log (characters)
    }
    else {
      alert ("Check number of Characters");
    

    }
  var lowerCase=confirm("Lower Case Required?");
    if (lowerCase==true) {
    console.log("Bananas")
    }
    else {
      console.log("Cookies")
    }
  var upperCase=confirm("Upper Case Required?");
  var Numeric=confirm("Numeric Required?");
  var specialChar=confirm("Special Charactars Required?");

  if (upperCaseArray === false && lowerCase === false && Numeric === false && specialChar === false) {
        alert("Please select at least one character type.")
  }

    var lowerCaseArray=["a", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var upperCaseArray=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var numericArray=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var specialCharArray=["!", "@", "#", "$", "%", "^", "&", "*", "_", "+", "(", ")", "{", "}", "[", "]", ";", "'", ".", "<", ">", "?", "/"]

var passwordCharactersArray=[];

if (lowerCase==true) {passwordCharactersArray}

  // if (lowerCase==true) {
  // passwordCharactersArray.push("lowerCaseArray");
  // }
    
  // if (upperCase==true) {
  //     passwordCharactersArray.push("upperCaseArray");
  // }

  // if (Numeric==true) {
  //   passwordCharactersArray.push("numericArray");
  // }

  // if (specialChar==true) {
  //   passwordCharactersArray.push("specialCharArray");
  // }

console.log(passwordCharactersArray)

console.log (characters)

for (var i=0; i<characters; i++) {
    console.log ("I am" + i)
}

//     someRandomLetter=math.floor (math.random()*26);
//     someRandomNumeric=math.floor (math.random()*10);
//     someRandomLetter=math.floor (math.random()*28);

//     console.log(lowerCaseArray[someRandomLetter]);

// }

// // Add event listener to generate button

generateBtn.addEventListener("click", generatePassword);
