class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = "";
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            if (
                (char >= "a" && char <= "z") ||
                (char >= "A" && char <= "Z") ||
                (char >= "0" && char <= "9")
            ) {
                cleaned += char.toLowerCase();
            }
        }
        let res = "";
        for (let i = cleaned.length-1; i >= 0; i--) {
            res = res + cleaned[i];
        }
        if (res == cleaned) {
            return true;
        } else {
            return false;
        }
    }
}
