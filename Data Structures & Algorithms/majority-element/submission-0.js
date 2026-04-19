class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map=new Map();
        for(let i=0;i<nums.length;i++){
            map.set(nums[i],(map.get(nums[i])||0)+1);
        }
        let n=nums.length;
        for(let [key,count] of map){
            if(count>n/2){
                return key;
            }
        }
    }
}
