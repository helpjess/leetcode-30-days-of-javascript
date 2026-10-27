/**
 * 2727. Is Object Empty
 * https://leetcode.com/problems/is-object-empty/
 *
 * Idea: an object or array is empty if it has no keys.
 */

var isEmpty = function (obj) {
    return Object.keys(obj).length === 0;
};
