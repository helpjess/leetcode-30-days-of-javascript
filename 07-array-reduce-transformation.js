/**
 * 2626. Array Reduce Transformation
 * https://leetcode.com/problems/array-reduce-transformation/
 *
 * Idea: start with init, then feed each element through fn(accumulator, element). Empty array → just init.
 */

var reduce = function (nums, fn, init) {
    let val = init;
    for (const num of nums) {
        val = fn(val, num);
    }
    return val;
};
