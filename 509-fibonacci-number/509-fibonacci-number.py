class Solution:
    def fib(self, n: int) -> int:
        i, antepenultimate, penultimate, fib = 1,0,1,0
        if n == 1:
            return 1
        while i < n:
            fib = antepenultimate + penultimate
            i += 1
            antepenultimate = penultimate
            penultimate = fib
        return fib