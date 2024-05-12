import {getFrequecyMap} from "../src/prac";

describe("getMap function tests", () => {
    test("getMap test 1", () => {
        const map = getFrequecyMap("abcdefg");
        expect(map.size).toBe(7);
        expect(map.get('a')).toBe(1);
        expect(map.get('b')).toBe(1);
        expect(map.get('c')).toBe(1);
        expect(map.get('d')).toBe(1);
        expect(map.get('e')).toBe(1);
        expect(map.get('f')).toBe(1);
        expect(map.get('g')).toBe(1);
        expect(map.get('h')).toBeUndefined();
    })
    test("should return correct counts for a string with unique characters", () => {
        const map = getFrequecyMap("abcdef");
        expect(map.size).toBe(6);
        expect(map.get('a')).toBe(1);
        expect(map.get('b')).toBe(1);
        expect(map.get('c')).toBe(1);
        expect(map.get('d')).toBe(1);
        expect(map.get('e')).toBe(1);
        expect(map.get('f')).toBe(1);
    });

    test("should return correct counts for a string with repeated characters", () => {
        const map = getFrequecyMap("aabbcc");
        expect(map.size).toBe(3);
        expect(map.get('a')).toBe(2);
        expect(map.get('b')).toBe(2);
        expect(map.get('c')).toBe(2);
    });

    test("should handle an empty string", () => {
        const map = getFrequecyMap("");
        expect(map.size).toBe(0);
    });

    test("should handle case sensitivity", () => {
        const map = getFrequecyMap("AaBbCc");
        expect(map.size).toBe(6); // Checking case sensitivity
        expect(map.get('A')).toBe(1);
        expect(map.get('a')).toBe(1);
        expect(map.get('B')).toBe(1);
        expect(map.get('b')).toBe(1);
        expect(map.get('C')).toBe(1);
        expect(map.get('c')).toBe(1);
    });

    test("should return correct counts for a string with non-alphabetic characters", () => {
        const map = getFrequecyMap("123@123");
        expect(map.size).toBe(4);
        expect(map.get('1')).toBe(2);
        expect(map.get('2')).toBe(2);
        expect(map.get('3')).toBe(2);
        expect(map.get('@')).toBe(1);
    });
});


