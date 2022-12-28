class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        total_sum, left_sum = sum(nums), 0
        for i, x in enumerate(nums):
            if left_sum == total_sum - left_sum - x: return i
            left_sum += x
        return -1