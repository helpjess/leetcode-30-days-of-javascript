/**
 * 2695. Array Wrapper
 * https://leetcode.com/problems/array-wrapper/
 *
 * Idea: valueOf decides what `+` does (here: the array's sum), and toString decides what String(obj) shows (here: "[1,2,3]").
 */

var ArrayWrapper = function (nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
    return this.nums.reduce((sum, n) => sum + n, 0);
};

ArrayWrapper.prototype.toString = function () {
    return JSON.stringify(this.nums);
};
