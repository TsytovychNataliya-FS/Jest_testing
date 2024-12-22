// sumOfArray Function
function sumOfArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  return arr.reduce((sum, num) => {
    if (typeof num !== "number")
      throw new Error("Array must contain only numbers");
    return sum + num;
  }, 0);
}

// reverseString Function
function reverseString(str) {
  if (typeof str !== "string") throw new Error("Input must be a string");
  return str.split("").reverse().join("");
}

// isPalindrome Function
function isPalindrome(str) {
  if (typeof str !== "string") throw new Error("Input must be a string");

  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversed = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversed;
}

// capitalizeWords Function
function capitalizeWords(str) {
  if (typeof str !== "string") throw new Error("Input must be a string");

  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Helper Functions to Display Results
function testSumOfArray() {
  const input = document.getElementById("input-array").value;
  try {
    const arr = input.split(",").map(Number);
    if (arr.includes(NaN)) throw new Error("Array must contain only numbers");
    const result = sumOfArray(arr);
    displayOutput(`Sum of Array: ${result}`);
  } catch (error) {
    displayOutput(`Error: ${error.message}`);
  }
}

function testReverseString() {
  const input = document.getElementById("input-string").value;
  try {
    const result = reverseString(input);
    displayOutput(`Reversed String: ${result}`);
  } catch (error) {
    displayOutput(`Error: ${error.message}`);
  }
}

function testIsPalindrome() {
  const input = document.getElementById("input-string").value;
  try {
    const result = isPalindrome(input);
    displayOutput(`Is Palindrome: ${result}`);
  } catch (error) {
    displayOutput(`Error: ${error.message}`);
  }
}

function testCapitalizeWords() {
  const input = document.getElementById("capitalize-string").value;
  try {
    const result = capitalizeWords(input);
    displayOutput(`Capitalized Words: ${result}`);
  } catch (error) {
    displayOutput(`Error: ${error.message}`);
  }
}

// Function to display the output to the user
function displayOutput(message) {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = message;
}
