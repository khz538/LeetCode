class Solution:
    def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:
#         max num bags that could have full capacity --> so we should try to add to bags that are closest to being full
        space_left = {}
        for i,bag in enumerate(capacity):
            space_left[i] = bag - rocks[i]
        space_left = list(space_left.values())
        space_left.sort(reverse=True)
        bags = 0
        while additionalRocks > 0 and len(space_left) > 0:
            if space_left[-1] == 0:
                space_left.pop()
                bags += 1
            else:
                additionalRocks -= space_left.pop()
                if additionalRocks >= 0: bags += 1
        return bags