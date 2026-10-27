/**
 * 2722. Join Two Arrays by ID
 * https://leetcode.com/problems/join-two-arrays-by-id/
 *
 * Idea: use a Map keyed by id. Copy arr1 in, then merge arr2 on top (arr2 wins when both have the same key). Finally sort by id.
 */

var join = function (arr1, arr2) {
    const byId = new Map();
    for (const obj of arr1) {
        byId.set(obj.id, { ...obj });
    }
    for (const obj of arr2) {
        if (byId.has(obj.id)) {
            byId.set(obj.id, { ...byId.get(obj.id), ...obj });
        } else {
            byId.set(obj.id, { ...obj });
        }
    }
    return [...byId.values()].sort((a, b) => a.id - b.id);
};
