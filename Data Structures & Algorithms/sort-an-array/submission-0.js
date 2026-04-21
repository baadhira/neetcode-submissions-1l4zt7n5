class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        function mergeSort(arr) {
            // base case
            if (arr.length <= 1) return arr;

            // split
            let mid = Math.floor(arr.length / 2);
            let left = mergeSort(arr.slice(0, mid));
            let right = mergeSort(arr.slice(mid));

            // merge
            return merge(left, right);
        }

        function merge(left, right) {
            let result = [];
            let i = 0,
                j = 0;

            // compare and build result
            while (i < left.length && j < right.length) {
                if (left[i] <= right[j]) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }

            // add remaining elements
            return result.concat(left.slice(i)).concat(right.slice(j));
        }

        return mergeSort(nums);
    }
}
