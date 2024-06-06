function getOrDefault(map: Map<number, number>, key: number): number {
  if (!map.has(key)) return 0;
  return map.get(key) as number;
}

function setHashTable(nums1: number[]) {
  const nums1HashTable = new Map();

  nums1.forEach((value, index) => {
    nums1HashTable.set(value, getOrDefault(nums1HashTable, value) + 1);
  });

  return nums1HashTable;
}

export function intersect(nums1: number[], nums2: number[]): number[] {
  const result = [];

  const nums1HashTable = setHashTable(nums1);
  const nums2HashTable = setHashTable(nums2);

  for (const nums1Key of nums1HashTable.keys()) {
    if (nums2HashTable.has(nums1Key)) {
      const count = Math.min(
        nums1HashTable.get(nums1Key),
        nums2HashTable.get(nums1Key)
      );

      for (let i = 0; i < count; i++) {
        result.push(nums1Key);
      }
    }
  }

  return result;
}
