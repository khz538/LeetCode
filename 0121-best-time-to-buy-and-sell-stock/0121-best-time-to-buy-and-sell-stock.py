class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l, r = 0, 1
        maxGain = 0
        currentGain = 0
        while r < len(prices):
            # find low 
            if prices[r] < prices[l]:
                l = r
            currentGain = prices[r] - prices[l]
            if currentGain > maxGain:
                maxGain = currentGain
            r += 1
        return maxGain