class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left, right = 0, len(numbers) - 1
        while left < right:
            sum = numbers[left] + numbers[right]
            if sum == target:
                return [1 + left, 1 + right]
            elif sum < target:
                left += 1
            else:
                right -= 1
        return [-1, -1]
        