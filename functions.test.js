const {
  sumOfArray,
  reverseString,
  isPalindrome,
  capitalizeWords,
} = require("./functions");

describe("sumOfArray", () => {
  test("should return the sum of all elements in the array", () => {
    expect(sumOfArray([1, 2, 3, 4])).toBe(10);
    expect(sumOfArray([-1, -2, -3, -4])).toBe(-10);
    expect(sumOfArray([0, 0, 0])).toBe(0);
    expect(sumOfArray([100])).toBe(100);
    expect(sumOfArray([])).toBe(0);
  });

  test("should throw an error for invalid input", () => {
    expect(() => sumOfArray("not an array")).toThrow("Input must be an array");
    expect(() => sumOfArray([1, "two", 3])).toThrow(
      "Array must contain only numbers"
    );
    expect(() => sumOfArray(null)).toThrow("Input must be an array");
    expect(() => sumOfArray(undefined)).toThrow("Input must be an array");
  });

  test("should handle NaN and Infinity in the array", () => {
    expect(Number.isNaN(sumOfArray([1, 2, NaN, 4]))).toBe(true);
    expect(sumOfArray([1, 2, Infinity])).toBe(Infinity);
  });
});

describe("isPalindrome", () => {
  test("should correctly identify palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("")).toBe(true);
    expect(isPalindrome("a")).toBe(true);
    expect(isPalindrome("Aba")).toBe(true); // Case-insensitive now
  });

  test("should identify palindromes with spaces, punctuation, and mixed cases", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
    expect(isPalindrome("No 'x' in Nixon")).toBe(true);
    expect(isPalindrome("Was it a car or a cat I saw")).toBe(true);
  });

  test("should throw an error for invalid input", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
    expect(() => isPalindrome(null)).toThrow("Input must be a string");
    expect(() => isPalindrome(undefined)).toThrow("Input must be a string");
  });
});

test("should capitalize the first letter of each word", () => {
  expect(capitalizeWords("hello world")).toBe("Hello World");
  expect(capitalizeWords("javaScript is fun")).toBe("Javascript Is Fun");
  expect(capitalizeWords("")).toBe("");
  expect(capitalizeWords("a single word")).toBe("A Single Word");
  expect(capitalizeWords("   multiple   spaces   ")).toBe(
    "   Multiple   Spaces   "
  );
});

test("should capitalize words even if they are already uppercase or mixed case", () => {
  expect(capitalizeWords("javaSCRIPT is FuN")).toBe("Javascript Is Fun");
  expect(capitalizeWords("HELLO WORLD")).toBe("Hello World");
  expect(capitalizeWords("hello WORLD")).toBe("Hello World");
  expect(capitalizeWords("")).toBe("");
  expect(capitalizeWords("a single word")).toBe("A Single Word");
  expect(capitalizeWords("   multiple   spaces   ")).toBe(
    "   Multiple   Spaces   "
  );
});

test("should throw an error for invalid input", () => {
  expect(() => capitalizeWords(123)).toThrow("Input must be a string");
  expect(() => capitalizeWords(null)).toThrow("Input must be a string");
  expect(() => capitalizeWords(undefined)).toThrow("Input must be a string");
});
