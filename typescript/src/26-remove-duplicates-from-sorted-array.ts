export function removeDuplicates(nums: number[]): number {
  const numsLen = nums.length;
  let ptr1 = 0;
  let ptr2 = 0;

  while (1) {
    while (ptr2 < numsLen && nums[ptr1] == nums[ptr2]) {
      ptr2++;
    }

    if (ptr2 >= numsLen) break;

    nums[ptr1 + 1] = nums[ptr2];
    ptr1++;
  }

  return ptr1 + 1;
}
