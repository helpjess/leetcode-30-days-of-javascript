/**
 * 2625. Flatten Deeply Nested Array
 * https://leetcode.com/problems/flatten-deeply-nested-array/
 *
 * Idea: recursively unpack sub-arrays, but only while the current depth is less than n. Deeper arrays are kept as they are.
 */

var flat = function (arr, n) {
    const result = [];
    const unpack = (items, depth) => {
        for (const item of items) {
            if (Array.isArray(item) && depth < n) {
                unpack(item, depth + 1);
            } else {
                result.push(item);
            }
        }
    };
    unpack(arr, 0);
    return result;
};
