/**
 * 2677. Chunk Array
 * https://leetcode.com/problems/chunk-array/
 *
 * Idea: walk the array in steps of `size` and slice out each piece. The last piece is just whatever is left.
 */

var chunk = function (arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};
