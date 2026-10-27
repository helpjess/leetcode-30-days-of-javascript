/**
 * 2621. Sleep
 * https://leetcode.com/problems/sleep/
 *
 * Idea: wrap setTimeout in a Promise that resolves after `millis` ms.
 */

async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
}
