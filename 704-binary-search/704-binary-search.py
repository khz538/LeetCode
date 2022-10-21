class Solution:
    def search(self, nums: List[int], target: int) -> int:
        r, l = len(nums) - 1, 0
        while l <= r:
            m = (l + r) // 2
            if nums[m] == target:
                return m
            elif nums[m] < target:
                l = m + 1
            else:
                r = m - 1
        return -1