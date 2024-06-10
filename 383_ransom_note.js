/* 
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true


Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

*/


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var dictMagazine = {};
    var dictRansom = {};
    if (magazine.length < ransomNote.length) {
        return false;
    }

    for (let i = 0; i < magazine.length; i++) {
        if (i < ransomNote.length) {
            if (ransomNote[i] in dictRansom) {
                dictRansom[ransomNote[i]] = dictRansom[ransomNote[i]] + 1;
            } else {
                dictRansom[ransomNote[i]] = 1;
            }
        }

        if (magazine[i] in dictMagazine) {
            dictMagazine[magazine[i]] = dictMagazine[magazine[i]] + 1;
        } else {
            dictMagazine[magazine[i]] = 1;
        }
    }

    for (var i in dictRansom) {
        if (dictRansom[i] > (dictMagazine[i] || 0)) {
            return false;
        }
    }
    
    return true;
};



// Test cases

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true