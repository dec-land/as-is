/**
 * Helper functions for checking whether a value is a specific type.
 *
 * @class Is
 * @author Declan Fitzpatrick
 */
declare class Is {
    /**
     * Gets if the specified value is a number.
     * Returns false for NaN.
     * Returns true for Infinity and -Infinity.
     * @param value The value to test
     */
    static number(value: unknown, allowNull?: boolean): value is number;
    /**
     * Gets if the specified value is an integer.
     * Returns false for NaN, Infinity and -Infinity.
     * @param value The value to test
     */
    static integer(value: unknown, allowNull?: boolean): value is number;
    /**
     * Gets if the specified value is a string.
     * In JavaScript you can have variable type of string or type of object which is class of String.
     * Which is why the instanceof is needed as well. Unlikely but just incase.
     * @param value The value to test
     */
    static string(value: unknown, allowNull?: boolean): value is string;
    /**
     * Gets if the specified value is an array.
     * @param value The value to test
     */
    static array(value: unknown, allowNull?: boolean): value is unknown[];
    /**
     * Gets if the specified value is an array of a specific type.
     * @param value The value to test
     * @param innerTester The tester to use for each value in the array
     */
    static arrayOf<T>(value: unknown, innerTester: (value: unknown, allowNull?: boolean) => value is T, allowNull?: boolean): value is T[];
    /**
     * Gets if the specified value is a read-only array.
     * Equivalent to Is.array at runtime.
     * @param value The value to test
     */
    static readonlyArray(value: unknown, allowNull?: boolean): value is ReadonlyArray<unknown>;
    /**
     * Gets if the specified value is an array of a specific type.
     * Equivalent to Is.arrayOf at runtime.
     * @param value The value to test
     * @param innerTester The tester to use for each value in the array
     */
    static readonlyArrayOf<T>(value: unknown, innerTester: (value: unknown, allowNull?: boolean) => value is T, allowNull?: boolean): value is ReadonlyArray<T>;
    /**
     * Gets if the specified value is an object but NOT an array.
     * @param value The value to test
     */
    static object(value: unknown, allowNull?: boolean): value is Record<string, unknown>;
    /**
     * Gets if the specified value is an object but NOT an array. With specified properties/keys
     * @param value The value to test
     * @param props The properties to check exist in the object
     */
    static objectWithProperties<T>(value: unknown, ...props: string[]): value is Record<string, T>;
    /**
     * Gets if the specified value is a function.
     * @param value The value to test
     */
    static function(value: unknown, allowNull?: boolean): value is (...args: unknown[]) => void;
    /**
     * Gets if the specified value is a boolean.
     * @param value The value to test
     */
    static boolean(value: unknown, allowNull?: boolean): value is boolean;
    /**
     * Gets if the specified value is a primitive.
     * @param value The value to test
     */
    static primitive(value: unknown, allowNull?: boolean): value is boolean | number | string;
    /**
     * Gets if the specified value is a non-primitive.
     * @param value The value to test
     */
    static nonPrimitive(value: unknown, allowNull?: boolean): value is Record<string, unknown>;
    /**
     * Gets if the specified value is an error.
     * @param value The value to test
     */
    static error(value: unknown, allowNull?: boolean): value is Error;
    /**
     * Gets if the specified value is a date.
     * @param value The value to test
     */
    static date(value: unknown, allowNull?: boolean): value is Date;
    /**
     * Gets if the specified value is a json string
     * @param value The value to test
     */
    static json(value: unknown, allowNull?: boolean): value is JSON;
}
export default Is;
