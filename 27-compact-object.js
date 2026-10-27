/**
 * 2705. Compact Object
 * https://leetcode.com/problems/compact-object/
 *
 * Idea: clean nested objects/arrays first (recursion), then drop any value that is falsy (null, 0, false, "", ...).
 */

var compactObject = function (obj) {
    if (obj === null || typeof obj !== "object") return obj;

    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }

    const result = {};
    for (const key in obj) {
        const value = compactObject(obj[key]);
        if (value) result[key] = value;
    }
    return result;
};
