export function numsToMap(nums: number[]): Map<number, number> {
    const map = new Map<number, number>();
    nums.forEach(n => {
        map.set(n, (map.get(n) ?? 0) + 1);
    })
    return map;
}

function max(a: number, b: number) {
    if (a >= b) {
        return a;
    }
    return b;
}

function getValue(map: Map<number, number>, n: number): number {
    if(map.get(n) === undefined) return 0;
    return n * map.get(n)!;
}

export function dp(arr: number[], idx: number, mem: number[], map: Map<number, number>): number {
    if (idx < 0) return 0;

    if (mem[idx] !== -1) return mem[idx];

    if (idx === 0 || idx === 1) {
        mem[idx] = getValue(map, arr[idx]);
        return mem[idx];
    }

    mem[idx] = max(dp(arr, idx - 3, mem, map), dp(arr, idx - 2, mem, map)) + getValue(map, arr[idx]);
    return mem[idx];
}

export function deleteAndEarn(nums: number[]): number {
    const map = numsToMap(nums);
    const keys = Array.from(map.keys()).sort((a, b) => a - b);
    const mem: number[] = [];
    const arr: number[] = [];
    for (let i = keys[0]; i <= keys[keys.length - 1]; i++) {
        arr.push(i);
        mem.push(-1)
    }

    return max(dp(arr, arr.length - 1, mem, map), dp(arr, arr.length - 2, mem, map));
};