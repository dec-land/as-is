/* eslint-disable no-restricted-syntax */

import { isNativeError } from 'util/types';

/**
 * Helper functions for checking whether a value is a specific type.
 *
 * @class Is
 * @author Declan Fitzpatrick
 */
class Is {
	/**
	 * Gets if the specified value is a number.
	 * Returns false for NaN.
	 * Returns true for Infinity and -Infinity.
	 * @param value The value to test
	 */
	public static number(value: unknown, allowNull = false): value is number {
		return (
			(allowNull && value == null) ||
			(value != null && !Number.isNaN(value) && (typeof value === 'number' || value instanceof Number))
		);
	}

	/**
	 * Gets if the specified value is an integer.
	 * Returns false for NaN, Infinity and -Infinity.
	 * @param value The value to test
	 */
	public static integer(value: unknown, allowNull = false): value is number {
		return (allowNull && value == null) || (Is.number(value) && value % 1 === 0);
	}

	/**
	 * Gets if the specified value is a string.
	 * In JavaScript you can have variable type of string or type of object which is class of String.
	 * Which is why the instanceof is needed as well. Unlikely but just incase.
	 * @param value The value to test
	 */
	public static string(value: unknown, allowNull = false): value is string {
		return (allowNull && value == null) || (value != null && (typeof value === 'string' || value instanceof String));
	}

	/**
	 * Gets if the specified value is an array.
	 * @param value The value to test
	 */
	public static array(value: unknown, allowNull = false): value is unknown[] {
		return (allowNull && value == null) || (value != null && Array.isArray(value));
	}

	/**
	 * Gets if the specified value is an array of a specific type.
	 * @param value The value to test
	 * @param innerTester The tester to use for each value in the array
	 */
	public static arrayOf<T>(
		value: unknown,
		innerTester: (value: unknown, allowNull?: boolean) => value is T,
		allowNull = false,
	): value is T[] {
		return (allowNull && value == null) || (value != null && Is.array(value) && value.every((el) => innerTester(el)));
	}

	/**
	 * Gets if the specified value is a read-only array.
	 * Equivalent to Is.array at runtime.
	 * @param value The value to test
	 */
	public static readonlyArray(value: unknown, allowNull = false): value is ReadonlyArray<unknown> {
		return Is.array(value, allowNull);
	}

	/**
	 * Gets if the specified value is an array of a specific type.
	 * Equivalent to Is.arrayOf at runtime.
	 * @param value The value to test
	 * @param innerTester The tester to use for each value in the array
	 */
	public static readonlyArrayOf<T>(
		value: unknown,
		innerTester: (value: unknown, allowNull?: boolean) => value is T,
		allowNull = false,
	): value is ReadonlyArray<T> {
		return Is.arrayOf(value, innerTester, allowNull);
	}

	/**
	 * Gets if the specified value is an object but NOT an array.
	 * @param value The value to test
	 */
	public static object(value: unknown, allowNull = false): value is Record<string, unknown> {
		return (allowNull && value == null) || (value != null && typeof value === 'object' && !Is.array(value, allowNull));
	}

	/**
	 * Gets if the specified value is an object but NOT an array. With specified properties/keys
	 * @param value The value to test
	 * @param props The properties to check exist in the object
	 */
	public static objectWithProperties<T>(value: unknown, ...props: string[]): value is Record<string, T> {
		return Is.object(value) && props.every((prop) => prop in value);
	}

	/**
	 * Gets if the specified value is a function.
	 * @param value The value to test
	 */
	public static function(value: unknown, allowNull = false): value is (...args: unknown[]) => void {
		return (
			(allowNull && value == null) || (value != null && (typeof value === 'function' || value instanceof Function))
		);
	}

	/**
	 * Gets if the specified value is a boolean.
	 * @param value The value to test
	 */
	public static boolean(value: unknown, allowNull = false): value is boolean {
		return (allowNull && value == null) || value === true || value === false;
	}

	/**
	 * Gets if the specified value is a primitive.
	 * @param value The value to test
	 */
	public static primitive(value: unknown, allowNull = false): value is boolean | number | string {
		return Is.number(value, allowNull) || Is.boolean(value, allowNull) || Is.string(value, allowNull);
	}

	/**
	 * Gets if the specified value is a non-primitive.
	 * @param value The value to test
	 */
	public static nonPrimitive(value: unknown, allowNull = false): value is Record<string, unknown> {
		return (allowNull && value == null) || (value != null && !Is.primitive(value, allowNull));
	}

	/**
	 * Gets if the specified value is an error.
	 * @param value The value to test
	 */
	public static error(value: unknown, allowNull = false): value is Error {
		return (allowNull && value == null) || value instanceof Error || isNativeError(value);
	}

	/**
	 * Gets if the specified value is a date.
	 * @param value The value to test
	 */
	public static date(value: unknown, allowNull = false): value is Date {
		return (
			(allowNull && value == null) ||
			(Object.prototype.toString.call(value) === '[object Date]' && !Number.isNaN(value))
		);
	}

	/**
	 * Gets if the specified value is a json string
	 * @param value The value to test
	 */
	public static json(value: unknown, allowNull = false): value is JSON {
		if (allowNull && value == null) return true;

		// Ensure its a string
		const stringValue = !Is.string(value) ? JSON.stringify(value) : value;

		let parsedValue;

		try {
			parsedValue = JSON.parse(stringValue);
		} catch (e) {
			// Unable to parse so not json
			return false;
		}

		// Should be an object when parsed.
		return Is.object(parsedValue, allowNull);
	}
}

export default Is;
