/**
 * 2703. Return Length of Arguments Passed
 * https://leetcode.com/problems/return-length-of-arguments-passed/
 *
 * Idea: the rest parameter ...args gathers every argument into a real array, so just return its length.
 */

var argumentsLength = function (...args) {
    return args.length;
};
