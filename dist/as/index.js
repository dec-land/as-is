"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-unused-modules */
var assert_1 = require("assert");
var is_1 = __importDefault(require("../is"));
/**
 * Helper functions for asserting unknown values as a specific type. If the assertion fails it will error.
 * Usage:
 * const arrayWithUnknownType = [] as unknown; // Although this is an array, it isn't properly typed and autofill won't show .length etc
 * As.array(arrayWithType); // Below this line typing now works correctly. This will be useful to enforce typing for routes etc.
 *
 * @class As
 * @author Declan Fitzpatrick
 */
var As = /** @class */ (function () {
    function As() {
    }
    /**
     * Asserts whether the specified value is a number.
     * Returns false for NaN.
     * Returns true for Infinity and -Infinity.
     * @param value The value to test
     */
    As.number = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.number(value, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not a number") });
        }
    };
    /**
     * Checks whether value is an integer and assers it to a number as there is no integer type
     * Returns false for NaN, Infinity and -Infinity.
     * @param value The value to test
     */
    As.integer = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.integer(value, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not a integer") });
        }
    };
    /**
     * Asserts whether the specified value is a string.
     * @param value The value to test
     */
    As.string = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.string(value, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not a string") });
        }
    };
    /**
     * Asserts whether the specified value is an array.
     * @param value The value to test
     */
    As.array = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.array(value, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not a array") });
        }
    };
    /**
     * Asserts whether the specified value is an array of a specific type.
     * @param value The value to test
     * @param innerTester The inner tester to use for each value in the array
     */
    As.arrayOf = function (value, innerTester, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.arrayOf(value, innerTester, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not an array of specified type") });
        }
    };
    /**
     * Asserts whether the specified value is a read-only array.
     * Equivalent to As.array at runtime.
     * @param value The value to test
     */
    As.readonlyArray = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.readonlyArray(value, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not a readonly array") });
        }
    };
    /**
     * Asserts whether the specified value is a read-only array of a specific type.
     * Equivalent to As.arrayOf at runtime.
     * @param value The value to test
     * @param innerTester The inner tester to use for each value in the array
     */
    As.readonlyArrayOf = function (value, innerTester, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.readonlyArrayOf(value, innerTester, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not a readonly array of specified type") });
        }
    };
    /**
     * Asserts whether the specified value is an object but NOT an array.
     * @param value The value to test
     */
    As.object = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.object(value, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not an object.") });
        }
    };
    /**
     * Asserts whether the specified value is a function.
     * @param value The value to test
     */
    As.function = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.function(value, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not a function") });
        }
    };
    /**
     * Asserts whether the specified value is a boolean.
     * @param value The value to test
     */
    As.boolean = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.boolean(value, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not a boolean") });
        }
    };
    /**
     * Asserts whether the specified value is a primitive.
     * @param value The value to test
     */
    As.primitive = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.primitive(value, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not a primitive") });
        }
    };
    /**
     * Asserts whether the specified value is a non-primitive.
     * @param value The value to test
     */
    As.nonPrimitive = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.nonPrimitive(value, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not a non primitive") });
        }
    };
    /**
     * Asserts whether the specified value is an error.
     * @param value The value to test
     */
    As.error = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.error(value, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not not an error") });
        }
    };
    /**
     * Asserts whether the specified value is a date
     * @param value The value to test
     */
    As.date = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.date(value, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not a date") });
        }
    };
    /**
     * Asserts whether the specified value is a json string
     * @param value The value to test
     */
    As.json = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (!is_1.default.json(value, allowNull)) {
            throw new assert_1.AssertionError({ message: "".concat(value, " is not JSON") });
        }
    };
    return As;
}());
exports.default = As;
