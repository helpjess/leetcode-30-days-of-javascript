/**
 * 2627. Debounce
 * https://leetcode.com/problems/debounce/
 *
 * Idea: every call cancels the previous pending timer and starts a new one, so fn only runs after the calls stop for t ms.
 */

var debounce = function (fn, t) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    };
};
