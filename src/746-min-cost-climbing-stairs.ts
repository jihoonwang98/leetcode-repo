function min(a: number, b: number): number {
    if (a <= b) {
        return a;
    }
    return b;
}

function safeAccess(arr: number[], idx: number) {
    if(idx < 0) {
        return 0;
    }

    return arr[idx];
}

export function dp(cost: number[], idx: number, len: number, mem: number[]): number {
    if(idx < 0) return Number.MAX_VALUE;


    if(idx !== len && mem[idx] !== -1) {
        return mem[idx]
    }

    if (idx !== len && (idx === 0 || idx === 1)) {
        mem[idx] = 0;
        return mem[idx];
    }

    mem[idx] = min(dp(cost, idx - 2, len, mem) + safeAccess(cost, idx - 2), dp(cost, idx - 1, len, mem) + safeAccess(cost, idx - 1));
    return mem[idx];
}

export function minCostClimbingStairs(cost: number[]): number {
    const len = cost.length;
    const mem: number[] = [];
    cost.forEach(n => mem.push(-1));

    return dp(cost, len, len, mem);
};