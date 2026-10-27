/**
 * 2629. Function Composition
 * https://leetcode.com/problems/function-composition/
 *
 * Idea: f(g(h(x))) means h runs FIRST, so apply the functions from right to left. Empty list → x comes back unchanged.
 */

var compose = function (functions) {
    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    };
};
