/**
 * 2665. Counter II
 * https://leetcode.com/problems/counter-ii/
 *
 * Idea: keep a private `current` inside the closure. ++x / --x change the value first and then return it.
 */

var createCounter = function (init) {
    let current = init;
    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => (current = init)
    };
};
