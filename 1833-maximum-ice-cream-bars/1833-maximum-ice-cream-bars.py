class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        bars_bought = 0
        costs.sort(reverse=True)
        while len(costs) > 0:
            if costs[-1] <= coins:
                coins -= costs.pop()
                bars_bought += 1
            else: break
        return bars_bought
        