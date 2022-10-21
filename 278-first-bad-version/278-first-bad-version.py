# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        l, r = 1, n
        while l <= r:
            m = (r + l) // 2
            if isBadVersion(m) == True and isBadVersion(m - 1) == False:
                return m
            elif isBadVersion(m) == True and isBadVersion(m - 1) == True:
                r = m - 1
            elif isBadVersion(m) == False and isBadVersion(m - 1) == False:
                l = m + 1
        
                