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
	public static number(value: unknown): value is number {
		return (value != null && !Number.isNaN(value) && (typeof value === 'number' || value instanceof Number))
	}

	/**
	 * Gets if the specified value is an integer.
	 * Returns false for NaN, Infinity and -Infinity.
	 * @param value The value to test
	 */
	public static integer(value: unknown): value is number {
		return Is.number(value) && value % 1 === 0;
	}

	/**
	 * Gets if the specified value is a string.
	 * In JavaScript you can have variable type of string or type of object which is class of String.
	 * Which is why the instanceof is needed as well. Unlikely but just incase.
	 * @param value The value to test
	 */
	public static string(value: unknown): value is string {
		return value != null && (typeof value === 'string' || value instanceof String);
	}

	/**
	 * Gets if the specified value is an array.
	 * @param value The value to test
	 */
	public static array(value: unknown): value is unknown[] {
		return value != null && Array.isArray(value);
	}

	/**
	 * Gets if the specified value is an array of a specific type.
	 * @param value The value to test
	 * @param innerTester The tester to use for each value in the array
	 */
	public static arrayOf<T>(
		value: unknown,
		innerTester: (value: unknown) => value is T
	): value is T[] {
		return value != null && Is.array(value) && value.every((el) => innerTester(el));
	}

	/**
	 * Gets if the specified value is a read-only array.
	 * Equivalent to Is.array at runtime.
	 * @param value The value to test
	 */
	public static readonlyArray(value: unknown): value is ReadonlyArray<unknown> {
		return Is.array(value);
	}

	/**
	 * Gets if the specified value is an array of a specific type.
	 * Equivalent to Is.arrayOf at runtime.
	 * @param value The value to test
	 * @param innerTester The tester to use for each value in the array
	 */
	public static readonlyArrayOf<T>(
		value: unknown,
		innerTester: (value: unknown) => value is T
	): value is ReadonlyArray<T> {
		return Is.arrayOf(value, innerTester);
	}

	/**
	 * Gets if the specified value is an object but NOT an array.
	 * @param value The value to test
	 */
	public static object(value: unknown): value is Record<string, unknown> {
		return value != null && typeof value === 'object' && !Is.array(value);
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
	public static function(value: unknown): value is (...args: unknown[]) => void {
		return value != null && (typeof value === 'function' || value instanceof Function)
	}

	/**
	 * Gets if the specified value is a boolean.
	 * @param value The value to test
	 */
	public static boolean(value: unknown): value is boolean {
		return value === true || value === false;
	}

	/**
	 * Gets if the specified value is a primitive.
	 * @param value The value to test
	 */
	public static primitive(value: unknown): value is boolean | number | string {
		return Is.number(value) || Is.boolean(value) || Is.string(value);
	}

	/**
	 * Gets if the specified value is a non-primitive.
	 * @param value The value to test
	 */
	public static nonPrimitive(value: unknown): value is Record<string, unknown> {
		return value != null && !Is.primitive(value);
	}

	/**
	 * Gets if the specified value is an error.
	 * @param value The value to test
	 */
	public static error(value: unknown): value is Error {
		return value instanceof Error || Object.prototype.toString.call(value) === "[object Error]"
	}

	/**
	 * Gets if the specified value is a date.
	 * @param value The value to test
	 */
	public static date(value: unknown): value is Date {
		return value != null && Object.prototype.toString.call(value) === '[object Date]' && !Number.isNaN(value);
	}

	/**
	 * Gets if the specified value is a json string
	 * @param value The value to test
	 */
	public static json(value: unknown): value is JSON {

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
		return Is.object(parsedValue);
	}
}

export default Is;
