class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res=[];
        for(let i=0;i<nums.length;i++){
            let product=1;
            for(let j=0;j<i;j++){
                product=product*nums[j];
            }
            for(let k=i+1;k<nums.length;k++){
                product=product*nums[k];
            }
            res.push(product);
        }
        return res;
    }
}
