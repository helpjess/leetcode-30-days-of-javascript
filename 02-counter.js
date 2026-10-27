/**
 * 2620. Counter
 * https://leetcode.com/problems/counter/
 *
 * Idea: the inner function "remembers" n (closure). n++ returns the current value first, then bumps it for next time.
 */

var createCounter = function (n) {
    return function () {
        return n++;
    };
};
