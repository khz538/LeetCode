class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter = dict()
        for num in nums:
            if num in counter: counter[num] += 1
            else: counter[num] = 1
        sortedDict = dict(sorted(counter.items(), key=lambda x: x[1]))
        return list(sortedDict)[-k:]
        
        