/**
 * 2723. Add Two Promises
 * https://leetcode.com/problems/add-two-promises/
 *
 * Idea: wait for both promises (in parallel with Promise.all) and add the two results.
 */

var addTwoPromises = async function (promise1, promise2) {
    const [a, b] = await Promise.all([promise1, promise2]);
    return a + b;
};
