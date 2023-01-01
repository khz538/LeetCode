class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words_dict = {}
        chars_dict = {}
        words = s.split(' ')
        if len(words) != len(pattern): return False
        for char,word in zip(pattern, words):
            if char not in chars_dict:
                if word in words_dict:
                    return False
                else:
                    words_dict[word] = char
                    chars_dict[char] = word
            else:
                if chars_dict[char] != word: return False
        
        return True
                