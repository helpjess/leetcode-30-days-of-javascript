/**
 * 2619. Array Prototype Last
 * https://leetcode.com/problems/array-prototype-last/
 *
 * Idea: adding a method to Array.prototype gives it to every array. Inside the method, `this` is the array.
 */

Array.prototype.last = function () {
    return this.length === 0 ? -1 : this[this.length - 1];
};
