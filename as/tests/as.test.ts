import {
	IValue,
	valuesToTestNumber,
	valuesToTestBoolean,
	valuesToTestInteger,
	valuesToTestObject,
	valuesToTestString,
	valuesToTestArrayOf,
	valuesToTestPrimitive,
	valuesToTestFunction,
	valuesToTestArray,
	valuesToTestDate,
} from '../../is/test/is.test.data';
import As from '..';
import Is from '../../is';

const testAs = async (
	asFunction: (v: unknown, inner?: ((value: unknown) => unknown) | boolean) => unknown,
	valuesToTest: IValue[],
) => {
	valuesToTest.forEach(({ value, result, inner }) => {
		if (result) {
			expect(() => {
				expect(Is.function(inner) ? asFunction(value, inner) : asFunction(value));
			}).not.toThrow();
		} else {
			expect(() => {
				expect(Is.function(inner) ? asFunction(value, inner) : asFunction(value));
			}).toThrow();
		}
	});
};

describe('As', () => {
	it('Should assert the value is a number', () => testAs(As.number, valuesToTestNumber));
	it('Should assert the value is a integer', () => testAs(As.integer, valuesToTestInteger));
	it('Should assert the value is a boolean', () => testAs(As.boolean, valuesToTestBoolean));
	it('Should assert the value is an object', () => testAs(As.object, valuesToTestObject));
	it('Should assert the value is a string', () => testAs(As.string, valuesToTestString));
	it('Should assert the value is a date', () => testAs(As.date, valuesToTestDate));
	it('Should assert the value is an array', () => testAs(As.array, valuesToTestArray));
	it('Should assert the value is a primitive', () => testAs(As.primitive, valuesToTestPrimitive));
	it('Should assert the value is a function', () => testAs(As.function, valuesToTestFunction));

	it('Should assert the value is an array of a given type', () => testAs(As.arrayOf, valuesToTestArrayOf));
});
