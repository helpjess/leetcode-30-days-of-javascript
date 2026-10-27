/**
 * 2667. Create Hello World Function
 * https://leetcode.com/problems/create-hello-world-function/
 *
 * Idea: the outer function returns an inner one, which ignores its arguments and always returns the same string.
 */

var createHelloWorld = function () {
    return function (...args) {
        return "Hello World";
    };
};
