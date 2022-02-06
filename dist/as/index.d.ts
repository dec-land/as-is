/**
 * Helper functions for asserting unknown values as a specific type. If the assertion fails it will error.
 * Usage:
 * const arrayWithUnknownType = [] as unknown; // Although this is an array, it isn't properly typed and autofill won't show .length etc
 * As.array(arrayWithType); // Below this line typing now works correctly. This will be useful to enforce typing for routes etc.
 *
 * @class As
 * @author Declan Fitzpatrick
 */
declare class As {
    /**
     * Asserts whether the specified value is a number.
     * Returns false for NaN.
     * Returns true for Infinity and -Infinity.
     * @param value The value to test
     */
    static number(value: unknown, allowNull?: boolean): asserts value is number;
    /**
     * Checks whether value is an integer and assers it to a number as there is no integer type
     * Returns false for NaN, Infinity and -Infinity.
     * @param value The value to test
     */
    static integer(value: unknown, allowNull?: boolean): asserts value is number;
    /**
     * Asserts whether the specified value is a string.
     * @param value The value to test
     */
    static string(value: unknown, allowNull?: boolean): asserts value is string;
    /**
     * Asserts whether the specified value is an array.
     * @param value The value to test
     */
    static array(value: unknown, allowNull?: boolean): asserts value is unknown[];
    /**
     * Asserts whether the specified value is an array of a specific type.
     * @param value The value to test
     * @param innerTester The inner tester to use for each value in the array
     */
    static arrayOf<T>(value: unknown, innerTester: (value: unknown) => value is T, allowNull?: boolean): asserts value is T[];
    /**
     * Asserts whether the specified value is a read-only array.
     * Equivalent to As.array at runtime.
     * @param value The value to test
     */
    static readonlyArray(value: unknown, allowNull?: boolean): asserts value is ReadonlyArray<unknown>;
    /**
     * Asserts whether the specified value is a read-only array of a specific type.
     * Equivalent to As.arrayOf at runtime.
     * @param value The value to test
     * @param innerTester The inner tester to use for each value in the array
     */
    static readonlyArrayOf<T>(value: unknown, innerTester: (value: unknown) => value is T, allowNull?: boolean): asserts value is ReadonlyArray<T>;
    /**
     * Asserts whether the specified value is an object but NOT an array.
     * @param value The value to test
     */
    static object(value: unknown, allowNull?: boolean): asserts value is Record<string, unknown>;
    /**
     * Asserts whether the specified value is a function.
     * @param value The value to test
     */
    static function(value: unknown, allowNull?: boolean): asserts value is (...args: unknown[]) => void;
    /**
     * Asserts whether the specified value is a boolean.
     * @param value The value to test
     */
    static boolean(value: unknown, allowNull?: boolean): asserts value is boolean;
    /**
     * Asserts whether the specified value is a primitive.
     * @param value The value to test
     */
    static primitive(value: unknown, allowNull?: boolean): asserts value is Primitive;
    /**
     * Asserts whether the specified value is a non-primitive.
     * @param value The value to test
     */
    static nonPrimitive(value: unknown, allowNull?: boolean): asserts value is Record<string, unknown>;
    /**
     * Asserts whether the specified value is an error.
     * @param value The value to test
     */
    static error(value: unknown, allowNull?: boolean): asserts value is Error;
    /**
     * Asserts whether the specified value is a date
     * @param value The value to test
     */
    static date(value: unknown, allowNull?: boolean): asserts value is Date;
    /**
     * Asserts whether the specified value is a json string
     * @param value The value to test
     */
    static json(value: unknown, allowNull?: boolean): asserts value is JSON;
}
export default As;
