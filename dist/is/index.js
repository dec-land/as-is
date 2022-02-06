"use strict";
/* eslint-disable no-restricted-syntax */
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("util/types");
/**
 * Helper functions for checking whether a value is a specific type.
 *
 * @class Is
 * @author Declan Fitzpatrick
 */
var Is = /** @class */ (function () {
    function Is() {
    }
    /**
     * Gets if the specified value is a number.
     * Returns false for NaN.
     * Returns true for Infinity and -Infinity.
     * @param value The value to test
     */
    Is.number = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return ((allowNull && value == null) ||
            (value != null && !Number.isNaN(value) && (typeof value === 'number' || value instanceof Number)));
    };
    /**
     * Gets if the specified value is an integer.
     * Returns false for NaN, Infinity and -Infinity.
     * @param value The value to test
     */
    Is.integer = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return (allowNull && value == null) || (Is.number(value) && value % 1 === 0);
    };
    /**
     * Gets if the specified value is a string.
     * In JavaScript you can have variable type of string or type of object which is class of String.
     * Which is why the instanceof is needed as well. Unlikely but just incase.
     * @param value The value to test
     */
    Is.string = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return (allowNull && value == null) || (value != null && (typeof value === 'string' || value instanceof String));
    };
    /**
     * Gets if the specified value is an array.
     * @param value The value to test
     */
    Is.array = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return (allowNull && value == null) || (value != null && Array.isArray(value));
    };
    /**
     * Gets if the specified value is an array of a specific type.
     * @param value The value to test
     * @param innerTester The tester to use for each value in the array
     */
    Is.arrayOf = function (value, innerTester, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return (allowNull && value == null) || (value != null && Is.array(value) && value.every(function (el) { return innerTester(el); }));
    };
    /**
     * Gets if the specified value is a read-only array.
     * Equivalent to Is.array at runtime.
     * @param value The value to test
     */
    Is.readonlyArray = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return Is.array(value, allowNull);
    };
    /**
     * Gets if the specified value is an array of a specific type.
     * Equivalent to Is.arrayOf at runtime.
     * @param value The value to test
     * @param innerTester The tester to use for each value in the array
     */
    Is.readonlyArrayOf = function (value, innerTester, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return Is.arrayOf(value, innerTester, allowNull);
    };
    /**
     * Gets if the specified value is an object but NOT an array.
     * @param value The value to test
     */
    Is.object = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return (allowNull && value == null) || (value != null && typeof value === 'object' && !Is.array(value, allowNull));
    };
    /**
     * Gets if the specified value is an object but NOT an array. With specified properties/keys
     * @param value The value to test
     * @param props The properties to check exist in the object
     */
    Is.objectWithProperties = function (value) {
        var props = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            props[_i - 1] = arguments[_i];
        }
        return Is.object(value) && props.every(function (prop) { return prop in value; });
    };
    /**
     * Gets if the specified value is a function.
     * @param value The value to test
     */
    Is.function = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return ((allowNull && value == null) || (value != null && (typeof value === 'function' || value instanceof Function)));
    };
    /**
     * Gets if the specified value is a boolean.
     * @param value The value to test
     */
    Is.boolean = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return (allowNull && value == null) || value === true || value === false;
    };
    /**
     * Gets if the specified value is a primitive.
     * @param value The value to test
     */
    Is.primitive = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return Is.number(value, allowNull) || Is.boolean(value, allowNull) || Is.string(value, allowNull);
    };
    /**
     * Gets if the specified value is a non-primitive.
     * @param value The value to test
     */
    Is.nonPrimitive = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return (allowNull && value == null) || (value != null && !Is.primitive(value, allowNull));
    };
    /**
     * Gets if the specified value is an error.
     * @param value The value to test
     */
    Is.error = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return (allowNull && value == null) || value instanceof Error || (0, types_1.isNativeError)(value);
    };
    /**
     * Gets if the specified value is a date.
     * @param value The value to test
     */
    Is.date = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return ((allowNull && value == null) ||
            (Object.prototype.toString.call(value) === '[object Date]' && !Number.isNaN(value)));
    };
    /**
     * Gets if the specified value is a json string
     * @param value The value to test
     */
    Is.json = function (value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        if (allowNull && value == null)
            return true;
        // Ensure its a string
        var stringValue = !Is.string(value) ? JSON.stringify(value) : value;
        var parsedValue;
        try {
            parsedValue = JSON.parse(stringValue);
        }
        catch (e) {
            // Unable to parse so not json
            return false;
        }
        // Should be an object when parsed.
        return Is.object(parsedValue, allowNull);
    };
    return Is;
}());
exports.default = Is;
