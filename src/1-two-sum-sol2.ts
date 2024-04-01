export function twoSum2(nums: number[], target: number): number[] {
  const flag = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (flag.has(target - nums[i])) {
      return [flag.get(target - nums[i]) as number, i];
    }

    flag.set(nums[i], i);
  }
  return [-1, -1];
}
