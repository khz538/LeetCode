import heapq

class Solution:
    def connectSticks(self, sticks: List[int]) -> int:
        cost = 0
        heapify(sticks)
        while len(sticks) > 1:
            min1 = heappop(sticks)
            min2 = heappop(sticks)
            sum = min1 + min2
            cost += sum
            heappush(sticks, sum)
        return cost