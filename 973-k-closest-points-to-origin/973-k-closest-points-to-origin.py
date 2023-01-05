from math import sqrt
from heapq import heapify, heappop
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        pts = []
        def distance(point):
            return sqrt(point[0]**2 + point[1]**2)
        for point in points:
            pts.append([distance(point), point[0], point[1]])
        heapify(pts)
        result = []
        for i in range(k):
            distance, x, y = heappop(pts)
            result.append([x,y])

        return result