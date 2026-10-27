/**
 * 2634. Filter Elements from Array
 * https://leetcode.com/problems/filter-elements-from-array/
 *
 * Idea: same loop, but only keep the element when fn(value, index) is truthy.
 */

var filter = function (arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) result.push(arr[i]);
    }
    return result;
};
