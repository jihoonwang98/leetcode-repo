import {rob} from "../src/198-house-robber";

describe("Rob", () => {
    test('Example 1', () => {
        expect(rob([1, 2, 3, 1])).toBe(4);
    });

    test('Example 2', () => {
        expect(rob([2, 7, 9, 3, 1])).toBe(12);
    });

    test('Single house', () => {
        expect(rob([5])).toBe(5);
    });

    test('Two houses', () => {
        expect(rob([2, 3])).toBe(3);
    });

    test('Three houses', () => {
        expect(rob([2, 1, 1, 2])).toBe(4);
    });

    test('All houses with same amount', () => {
        expect(rob([4, 4, 4, 4, 4])).toBe(12);
    });

    test('Increasing values', () => {
        expect(rob([1, 2, 3, 4, 5])).toBe(9);
    });

    test('Decreasing values', () => {
        expect(rob([5, 4, 3, 2, 1])).toBe(9);
    });

    test('Zeros in between', () => {
        expect(rob([2, 0, 7, 0, 9, 3, 0, 1])).toBe(19);
    });

    test('Large amounts', () => {
        expect(rob([400, 300, 200, 100])).toBe(600);
    });

    test('Mixed values', () => {
        expect(rob([2, 1, 4, 9, 1, 7, 8, 1])).toBe(21);
    });
})

