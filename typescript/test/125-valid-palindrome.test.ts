import {isPalindrome} from "../src/125-valid-palindrome";

describe('isPalindrome', () => {
    test('identifies a palindrome with mixed case and special characters', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    test('identifies a non-palindrome', () => {
        expect(isPalindrome("Hello, World!")).toBe(false);
    });

    test('identifies an empty string as a palindrome', () => {
        expect(isPalindrome("")).toBe(true);
    });

    test('identifies a single character string as a palindrome', () => {
        expect(isPalindrome("a")).toBe(true);
    });

    test('identifies a palindrome with numbers', () => {
        expect(isPalindrome("12321")).toBe(true);
    });

    test('identifies a non-palindrome with numbers', () => {
        expect(isPalindrome("12345")).toBe(false);
    });
});