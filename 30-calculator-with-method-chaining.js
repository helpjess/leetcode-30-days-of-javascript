/**
 * 2726. Calculator with Method Chaining
 * https://leetcode.com/problems/calculator-with-method-chaining/
 *
 * Idea: every operation updates the result and returns `this` — that is what lets you write calc.add(5).subtract(2).getResult().
 */

class Calculator {
    constructor(value) {
        this.result = value;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) throw new Error("Division by zero is not allowed");
        this.result /= value;
        return this;
    }

    power(value) {
        this.result **= value;
        return this;
    }

    getResult() {
        return this.result;
    }
}
