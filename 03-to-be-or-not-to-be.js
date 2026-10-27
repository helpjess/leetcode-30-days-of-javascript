/**
 * 2704. To Be Or Not To Be
 * https://leetcode.com/problems/to-be-or-not-to-be/
 *
 * Idea: return an object with two methods. Each one compares with === and throws the required error if the check fails.
 */

var expect = function (val) {
    return {
        toBe: function (other) {
            if (val !== other) throw new Error("Not Equal");
            return true;
        },
        notToBe: function (other) {
            if (val === other) throw new Error("Equal");
            return true;
        }
    };
};
