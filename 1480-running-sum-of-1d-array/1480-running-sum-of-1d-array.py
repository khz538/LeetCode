class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        running_sums = []
        running_sum = 0
        for num in nums:
            running_sum += num
            running_sums.append(running_sum)
        return running_sums