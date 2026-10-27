/**
 * 2715. Timeout Cancellation
 * https://leetcode.com/problems/timeout-cancellation/
 *
 * Idea: schedule fn with setTimeout; cancelFn just clears that timer. If cancel happens before t ms, fn never runs.
 */

var cancellable = function (fn, args, t) {
    const timer = setTimeout(() => fn(...args), t);
    return function cancelFn() {
        clearTimeout(timer);
    };
};
