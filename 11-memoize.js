/**
 * 2623. Memoize
 * https://leetcode.com/problems/memoize/
 *
 * Idea: cache results in a Map keyed by the arguments. If the same arguments come again, return the saved answer without calling fn.
 */

function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.join(",");
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}
