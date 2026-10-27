/**
 * 2622. Cache With Time Limit
 * https://leetcode.com/problems/cache-with-time-limit/
 *
 * Idea: store { value, timer } per key. Each key gets its own timer that deletes it when it expires; setting the key again cancels the old timer first.
 */

var TimeLimitedCache = function () {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
    const existing = this.cache.get(key);
    if (existing) clearTimeout(existing.timer);
    const timer = setTimeout(() => this.cache.delete(key), duration);
    this.cache.set(key, { value, timer });
    return Boolean(existing);
};

TimeLimitedCache.prototype.get = function (key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function () {
    return this.cache.size;
};
