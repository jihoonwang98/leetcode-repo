export function mapsAreEqual<K, V>(map1: Map<K, V>, map2: Map<K, V>): boolean {
    if (map1.size !== map2.size) {
        return false;
    }

    for (const [key, value] of map1) {
        if (!map2.has(key)) {
            return false;
        }

        const map2Value = map2.get(key);
        if (value !== map2Value) {
            return false;
        }
    }

    return true;
}


export function getFrequencyMap(s: string): Map<string, number> {
    const frequencyMap = new Map<string, number>();

    for (let char of s) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    return frequencyMap;
}

export function isAnagram(s: string, t: string): boolean {
    const sMap = getFrequencyMap(s);
    const tMap = getFrequencyMap(t);

    return mapsAreEqual(sMap, tMap);
}
