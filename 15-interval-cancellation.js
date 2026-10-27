/**
 * 2725. Interval Cancellation
 * https://leetcode.com/problems/interval-cancellation/
 *
 * Idea: call fn immediately, then repeat every t ms with setInterval. cancelFn stops the interval.
 */

var cancellable = function (fn, args, t) {
    fn(...args);
    const timer = setInterval(() => fn(...args), t);
    return function cancelFn() {
        clearInterval(timer);
    };
};
