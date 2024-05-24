import {numsToMap,deleteAndEarn} from "../src/740-delete-and-earn";

describe('numsToMap', () => {
    test('should handle an empty array', () => {
        const result = numsToMap([]);
        expect(result.size).toBe(0);
    });

    test('should handle an array with one element', () => {
        const result = numsToMap([1]);
        expect(result.size).toBe(1);
        expect(result.get(1)).toBe(1);
    });

    test('should handle an array with distinct elements', () => {
        const result = numsToMap([1, 2, 3]);
        expect(result.size).toBe(3);
        expect(result.get(1)).toBe(1);
        expect(result.get(2)).toBe(1);
        expect(result.get(3)).toBe(1);
    });

    test('should handle an array with duplicate elements', () => {
        const result = numsToMap([1, 2, 2, 3, 3, 3]);
        expect(result.size).toBe(3);
        expect(result.get(1)).toBe(1);
        expect(result.get(2)).toBe(2);
        expect(result.get(3)).toBe(3);
    });

    test('should handle an array with all identical elements', () => {
        const result = numsToMap([4, 4, 4, 4]);
        expect(result.size).toBe(1);
        expect(result.get(4)).toBe(4);
    });

    test('should handle an array with negative numbers', () => {
        const result = numsToMap([-1, -2, -2, -3, -3, -3]);
        expect(result.size).toBe(3);
        expect(result.get(-1)).toBe(1);
        expect(result.get(-2)).toBe(2);
        expect(result.get(-3)).toBe(3);
    });

    test('should handle an array with zero', () => {
        const result = numsToMap([0, 0, 0, 1, 1]);
        expect(result.size).toBe(2);
        expect(result.get(0)).toBe(3);
        expect(result.get(1)).toBe(2);
    });

    test('should handle an array with positive and negative numbers', () => {
        const result = numsToMap([-1, 1, -1, 1, 0]);
        expect(result.size).toBe(3);
        expect(result.get(-1)).toBe(2);
        expect(result.get(1)).toBe(2);
        expect(result.get(0)).toBe(1);
    });

    test('should handle an array with large numbers', () => {
        const result = numsToMap([1000, 1000, 1000000]);
        expect(result.size).toBe(2);
        expect(result.get(1000)).toBe(2);
        expect(result.get(1000000)).toBe(1);
    });

    test('should handle an array with non-sequential numbers', () => {
        const result = numsToMap([10, 20, 10, 30, 20, 30, 30]);
        expect(result.size).toBe(3);
        expect(result.get(10)).toBe(2);
        expect(result.get(20)).toBe(2);
        expect(result.get(30)).toBe(3);
    });
});


describe('deleteAndEarn', () => {
    test("test1", () => {
        expect(deleteAndEarn([3, 1])).toBe(4);
    })

    test('should return the correct maximum points for example 1', () => {
        expect(deleteAndEarn([3, 4, 2])).toBe(6);
    });

    test('should return the correct maximum points for example 2', () => {
        expect(deleteAndEarn([2, 2, 3, 3, 3, 4])).toBe(9);
    });

    test('should handle a single element array', () => {
        expect(deleteAndEarn([10])).toBe(10);
    });

    test('should handle all elements being the same', () => {
        expect(deleteAndEarn([5, 5, 5, 5])).toBe(20);
    });

    test('should handle two different elements', () => {
        expect(deleteAndEarn([4, 5])).toBe(5);
    });

    test('should handle an array with consecutive numbers', () => {
        expect(deleteAndEarn([1, 2, 3, 4])).toBe(6);
    });
});
