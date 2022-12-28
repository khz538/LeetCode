import heapq

class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        # remove the maximum number of stones
        # multiply each el of piles by -1, then heapify that new list
        total_stones_removed = 0
        total_stones_in_pile = sum(piles)
        piles = list(map(lambda x: x * -1, piles))
        heapq.heapify(piles)
        while k > 0:
            biggest_pile = heapq.heappop(piles)
            stones_removed = (biggest_pile * -1) // 2
            total_stones_removed += stones_removed
            new_pile = biggest_pile + stones_removed
            heapq.heappush(piles, new_pile)
            k -= 1
        return total_stones_in_pile - total_stones_removed