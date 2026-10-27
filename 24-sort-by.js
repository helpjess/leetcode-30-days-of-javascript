/**
 * 2724. Sort By
 * https://leetcode.com/problems/sort-by/
 *
 * Idea: a comparator returning fn(a) - fn(b) sorts in ascending order of fn's output.
 */

var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};
