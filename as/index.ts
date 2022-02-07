/* eslint-disable import/no-unused-modules */
import { AssertionError } from 'assert';
import Is from '../is';

/**
 * Helper functions for asserting unknown values as a specific type. If the assertion fails it will error.
 * Usage:
 * const arrayWithUnknownType = [] as unknown; // Although this is an array, it isn't properly typed and autofill won't show .length etc
 * As.array(arrayWithType); // Below this line typing now works correctly. This will be useful to enforce typing for routes etc.
 *
 * @class As
 * @author Declan Fitzpatrick
 */
class As {
	/**
	 * Asserts whether the specified value is a number.
	 * Returns false for NaN.
	 * Returns true for Infinity and -Infinity.
	 * @param value The value to test
	 */
	public static number(value: unknown, allowNull = false): asserts value is number {
		if (!Is.number(value, allowNull)) {
			throw new AssertionError({ message: `${value} is not a number` });
		}
	}

	/**
	 * Checks whether value is an integer and assers it to a number as there is no integer type
	 * Returns false for NaN, Infinity and -Infinity.
	 * @param value The value to test
	 */
	public static integer(value: unknown, allowNull = false): asserts value is number {
		if (!Is.integer(value, allowNull)) {
			throw new AssertionError({ message: `${value} is not a integer` });
		}
	}

	/**
	 * Asserts whether the specified value is a string.
	 * @param value The value to test
	 */
	public static string(value: unknown, allowNull = false): asserts value is string {
		if (!Is.string(value, allowNull)) {
			throw new AssertionError({ message: `${value} is not a string` });
		}
	}

	/**
	 * Asserts whether the specified value is an array.
	 * @param value The value to test
	 */
	public static array(value: unknown, allowNull = false): asserts value is unknown[] {
		if (!Is.array(value, allowNull)) {
			throw new AssertionError({ message: `${value} is not a array` });
		}
	}

	/**
	 * Asserts whether the specified value is an array of a specific type.
	 * @param value The value to test
	 * @param innerTester The inner tester to use for each value in the array
	 */
	public static arrayOf<T>(
		value: unknown,
		innerTester: (value: unknown) => value is T,
		allowNull = false,
	): asserts value is T[] {
		if (!Is.arrayOf<T>(value, innerTester, allowNull)) {
			throw new AssertionError({ message: `${value} is not an array of specified type` });
		}
	}

	/**
	 * Asserts whether the specified value is a read-only array.
	 * Equivalent to As.array at runtime.
	 * @param value The value to test
	 */
	public static readonlyArray(value: unknown, allowNull = false): asserts value is ReadonlyArray<unknown> {
		if (!Is.readonlyArray(value, allowNull)) {
			throw new AssertionError({ message: `${value} is not a readonly array` });
		}
	}

	/**
	 * Asserts whether the specified value is a read-only array of a specific type.
	 * Equivalent to As.arrayOf at runtime.
	 * @param value The value to test
	 * @param innerTester The inner tester to use for each value in the array
	 */
	public static readonlyArrayOf<T>(
		value: unknown,
		innerTester: (value: unknown) => value is T,
		allowNull = false,
	): asserts value is ReadonlyArray<T> {
		if (!Is.readonlyArrayOf<T>(value, innerTester, allowNull)) {
			throw new AssertionError({ message: `${value} is not a readonly array of specified type` });
		}
	}

	/**
	 * Asserts whether the specified value is an object but NOT an array.
	 * @param value The value to test
	 */
	public static object(value: unknown, allowNull = false): asserts value is Record<string, unknown> {
		if (!Is.object(value, allowNull)) {
			throw new AssertionError({ message: `${value} is not an object.` });
		}
	}

	/**
	 * Asserts whether the specified value is a function.
	 * @param value The value to test
	 */
	public static function(value: unknown, allowNull = false): asserts value is (...args: unknown[]) => void {
		if (!Is.function(value, allowNull)) {
			throw new AssertionError({ message: `${value} is not a function` });
		}
	}

	/**
	 * Asserts whether the specified value is a boolean.
	 * @param value The value to test
	 */
	public static boolean(value: unknown, allowNull = false): asserts value is boolean {
		if (!Is.boolean(value, allowNull)) {
			throw new AssertionError({ message: `${value} is not a boolean` });
		}
	}

	/**
	 * Asserts whether the specified value is a primitive.
	 * @param value The value to test
	 */
	public static primitive(value: unknown, allowNull = false): asserts value is Primitive {
		if (!Is.primitive(value, allowNull)) {
			throw new AssertionError({ message: `${value} is not a primitive` });
		}
	}

	/**
	 * Asserts whether the specified value is a non-primitive.
	 * @param value The value to test
	 */
	public static nonPrimitive(value: unknown, allowNull = false): asserts value is Record<string, unknown> {
		if (!Is.nonPrimitive(value, allowNull)) {
			throw new AssertionError({ message: `${value} is not a non primitive` });
		}
	}

	/**
	 * Asserts whether the specified value is an error.
	 * @param value The value to test
	 */
	public static error(value: unknown, allowNull = false): asserts value is Error {
		if (!Is.error(value, allowNull)) {
			throw new AssertionError({ message: `${value} is not not an error` });
		}
	}

	/**
	 * Asserts whether the specified value is a date
	 * @param value The value to test
	 */
	public static date(value: unknown, allowNull = false): asserts value is Date {
		if (!Is.date(value, allowNull)) {
			throw new AssertionError({ message: `${value} is not a date` });
		}
	}

	/**
	 * Asserts whether the specified value is a json string
	 * @param value The value to test
	 */
	public static json(value: unknown, allowNull = false): asserts value is JSON {
		if (!Is.json(value, allowNull)) {
			throw new AssertionError({ message: `${value} is not JSON` });
		}
	}
}

export default As;
