
function removeNonAlphanumeric(str: string): string {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

export function isPalindrome(s: string): boolean {
    const removedStr = removeNonAlphanumeric(s).toLowerCase();

    return removedStr === reverseString(removedStr);
}