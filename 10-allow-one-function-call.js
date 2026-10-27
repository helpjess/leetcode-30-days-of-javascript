/**
 * 2666. Allow One Function Call
 * https://leetcode.com/problems/allow-one-function-call/
 *
 * Idea: a flag in the closure. The first call runs fn and flips the flag; every later call returns undefined.
 */

var once = function (fn) {
    let called = false;
    return function (...args) {
        if (called) return undefined;
        called = true;
        return fn(...args);
    };
};
