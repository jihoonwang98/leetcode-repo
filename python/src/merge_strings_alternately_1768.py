class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        l1: list = list(word1)
        l2: list = list(word2)

        l1_len: int = len(l1)
        l2_len: int = len(l2)

        l1_longer_than_l2: bool = True if l1_len >= l2_len else False

        min_len = min(l1_len, l2_len)
        max_len = max(l1_len, l2_len)

        res = []
        for i in range(max_len):
            if l1_longer_than_l2 and i >= min_len:
                res.append(l1[i])

            elif not l1_longer_than_l2 and i >= min_len:
                res.append(l2[i])

            else:
                res.append(l1[i])
                res.append(l2[i])

        return "".join(res)
