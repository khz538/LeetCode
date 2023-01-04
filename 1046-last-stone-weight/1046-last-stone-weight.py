import heapq
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        negative_stones = list(map(lambda x: x * -1, stones))
        heapq.heapify(negative_stones) # max queue
        while len(negative_stones) > 1:
            heavy1 = heapq.heappop(negative_stones)
            heavy2 = heapq.heappop(negative_stones)
            if heavy1 != heavy2:
                new_stone = (abs(abs(heavy1) - abs(heavy2))) * -1
                heapq.heappush(negative_stones, new_stone)
        if len(negative_stones) == 0: return 0
        else: return heapq.heappop(negative_stones) * -1