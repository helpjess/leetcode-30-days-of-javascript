/**
 * 2637. Promise Time Limit
 * https://leetcode.com/problems/promise-time-limit/
 *
 * Idea: race fn against a timer. If the timer fires first, reject with "Time Limit Exceeded"; otherwise pass fn's result/error through.
 */

var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => reject("Time Limit Exceeded"), t);
            fn(...args)
                .then(resolve)
                .catch(reject)
                .finally(() => clearTimeout(timer));
        });
    };
};
