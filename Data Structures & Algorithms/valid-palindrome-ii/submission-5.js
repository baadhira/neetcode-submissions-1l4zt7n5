class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        if (s.length <= 1) return true;

        const isPalindrome = (left, right) => {
            while (left < right) {
                if (s[left] !== s[right]) {
                    return false;
                }

                left++;
                right--;
            }

            return true;
        };

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (s[left] === s[right]) {
                left++;
                right--;
            } else {
                return (
                    isPalindrome(left + 1, right) ||
                    isPalindrome(left, right - 1)
                );
            }
        }

        return true;
    }
}