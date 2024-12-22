// Function to calculate the sum of an array
function sumOfArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  if (!arr.every((item) => typeof item === "number")) {
    throw new Error("Array must contain only numbers");
  }
  return arr.reduce((sum, num) => sum + num, 0);
}

// Function to reverse a string
function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.split("").reverse().join("");
}

// Function to check if a string is a palindrome (case-sensitive and handles spaces, punctuation, and mixed cases)
function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversed = cleanedStr.split("").reverse().join(""); // Reverse the cleaned string

  return cleanedStr === reversed; // Case-insensitive comparison
}

// Function to capitalize the first letter of each word in a string
// Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  // Regex to match words while preserving leading and trailing spaces
  return str.replace(/\b\w+/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

module.exports = { sumOfArray, reverseString, isPalindrome, capitalizeWords };
