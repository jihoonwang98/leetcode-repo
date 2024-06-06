import unittest

from merge_strings_alternately_1768 import Solution


class TestSolution(unittest.TestCase):
    def test_merge_alternately_1(self):
        res = Solution().mergeAlternately("1234", "abc")
        self.assertEqual(res, "1a2b3c4")

    def test_merge_alternately_2(self):
        res = Solution().mergeAlternately("qwer", "asdf")
        self.assertEqual(res, "qawsedrf")

    def test_merge_alternately_3(self):
        res = Solution().mergeAlternately("asd", "qwer")
        self.assertEqual(res, "aqswder")

    def test_merge_alternately_4(self):
        res = Solution().mergeAlternately("q", "12345")
        self.assertEqual(res, "q12345")

if __name__ == '__main__':
    unittest.main()