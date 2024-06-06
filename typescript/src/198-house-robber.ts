function max(a: number, b: number): number {
    if(a >= b) return a;
    return b;
}

function dp(nums: number[], idx: number, mem: number[]): number{
    if(idx < 0) return 0;
    if(mem[idx] !== -1) return mem[idx];

    if(idx === 0) {
        mem[0] = nums[0];
        return mem[0];
    }
    if(idx === 1) {
        mem[1] = nums[1];
        return mem[1];
    }

    mem[idx] = max(dp(nums, idx - 2, mem), dp(nums, idx - 3, mem)) + nums[idx];
    return mem[idx];
}

export function rob(nums: number[]): number {
    const mem: number[] = [];
    nums.forEach(n => mem.push(-1));

    for(let i = 0 ; i <= nums.length - 1; i++) {
        dp(nums, i, mem);
    }

    let maxVal = -1;
    for(let i = 0 ; i <= nums.length - 1; i++) {
        if(maxVal < mem[i]) {
            maxVal = mem[i];
        }
    }

    return maxVal;
}