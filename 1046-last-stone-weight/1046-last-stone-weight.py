import heapq
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        # convert stones list to negative values so the heap behaves as a max priority queue
        negative_stones = list(map(lambda x: x * -1, stones))
        # convert negative stones list to a max priority queue
        heapq.heapify(negative_stones)
        while len(negative_stones) > 1:
            heavy1 = heapq.heappop(negative_stones) # heaviest stone
            heavy2 = heapq.heappop(negative_stones) # second heaviest stone
            if heavy1 != heavy2:
                new_stone = (abs(abs(heavy1) - abs(heavy2))) * -1
                heapq.heappush(negative_stones, new_stone)
        if len(negative_stones) == 0: return 0
        else: return heapq.heappop(negative_stones) * -1

        