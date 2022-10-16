// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

const nums = [1, 5, 3, 4, 18, 33, 11, 12, 70];
const target = 153;
var twoSum = function (nums, target) {
    var i = 0;
    var j = 0;
    while (j < nums.length && ((nums[i] + nums[i + 1]) != target)) {
        i = 0;
        while (((nums[j] + nums[i]) != target) && i <= target) {
            console.log(`current is :${nums[j] + nums[i]}`);
            i++;
        }
        j++;
    }
    if (nums[j - 1] + nums[i] === target) {
        console.log('your target is included in the array');
        console.log(nums[j - 1]);
        console.log(nums[i]);
    } else {
        console.log('the target does not included in array');
    }
};

twoSum(nums, target);