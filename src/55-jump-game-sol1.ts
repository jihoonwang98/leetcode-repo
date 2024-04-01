function canJump(nums): boolean {
  const n = nums.length;
  const visited = new Array(n).fill(false);
  const queue = [0];

  while (queue.length > 0) {
    const currentIndex = queue.shift();
    if (currentIndex === n - 1) {
      return true;
    }

    const jumpLength = nums[currentIndex];
    for (let i = 1; i <= jumpLength; i++) {
      const nextIndex = currentIndex + i;
      if (nextIndex < n && !visited[nextIndex]) {
        visited[nextIndex] = true;
        queue.push(nextIndex);
      }
    }
  }

  return false;
}
