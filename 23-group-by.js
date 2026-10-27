/**
 * 2631. Group By
 * https://leetcode.com/problems/group-by/
 *
 * Idea: compute each item's key with fn and push the item into result[key], creating the list the first time we see the key.
 */

Array.prototype.groupBy = function (fn) {
    const result = {};
    for (const item of this) {
        const key = fn(item);
        if (!Object.hasOwn(result, key)) result[key] = [];
        result[key].push(item);
    }
    return result;
};
