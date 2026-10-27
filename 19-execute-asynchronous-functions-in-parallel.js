/**
 * 2721. Execute Asynchronous Functions in Parallel
 * https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
 *
 * Idea: start every function at once. Store each result at its own index; resolve when all have finished, reject on the first error. (This is Promise.all written by hand.)
 */

var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let finished = 0;
        if (functions.length === 0) {
            resolve(results);
            return;
        }
        functions.forEach((fn, i) => {
            fn()
                .then((value) => {
                    results[i] = value;
                    finished++;
                    if (finished === functions.length) resolve(results);
                })
                .catch(reject);
        });
    });
};
