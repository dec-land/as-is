import Is from '..';

export interface IValue {
	value: unknown;
	result: boolean;

	inner?: (value: unknown) => unknown;
}

// TODO - combine these? Lots of duplication

export const valuesToTestNumber: IValue[] = [
	{ value: 5, result: true },
	{ value: 5.5555, result: true },
	{ value: Infinity, result: true },
	{ value: NaN, result: false },
	{ value: null, result: false },
	{ value: undefined, result: false },
	{ value: false, result: false },
	{ value: '5', result: false },
	{ value: '', result: false },
];

export const valuesToTestPrimitive: IValue[] = [
	{ value: 5, result: true },
	{ value: true, result: true },
	{ value: 'test', result: true },
	{ value: Infinity, result: true },
	{ value: NaN, result: false },
	{ value: null, result: false },
	{ value: undefined, result: false },
	{ value: ['false', 'true'], result: false },
	{ value: { testString: 'testy', testNumber: 5.5, testBoolean: false }, result: false },
];

export const valuesToTestInteger: IValue[] = [
	{ value: 5, result: true },
	{ value: 554545454, result: true },
	{ value: 5.5, result: false },
	{ value: Infinity, result: false },
	{ value: NaN, result: false },
	{ value: null, result: false },
	{ value: undefined, result: false },
	{ value: false, result: false },
	{ value: '5', result: false },
	{ value: '', result: false },
];

export const valuesToTestBoolean: IValue[] = [
	{ value: true, result: true },
	{ value: false, result: true },
	{ value: Boolean(), result: true },
	{ value: 5, result: false },
	{ value: 5.5, result: false },
	{ value: Infinity, result: false },
	{ value: NaN, result: false },
	{ value: null, result: false },
	{ value: undefined, result: false },
	{ value: '5', result: false },
	{ value: '', result: false },
];

export const valuesToTestString: IValue[] = [
	{ value: 'true', result: true },
	{ value: 'test', result: true },
	{ value: '', result: true },
	{ value: String(), result: true },
	{ value: 5, result: false },
	{ value: 5.5, result: false },
	{ value: Infinity, result: false },
	{ value: NaN, result: false },
	{ value: null, result: false },
	{ value: undefined, result: false },
];

export const valuesToTestDate: IValue[] = [
	{ value: new Date(), result: true },
	{ value: 'test', result: false },
	{ value: '', result: false },
	{ value: 5, result: false },
	{ value: Infinity, result: false },
	{ value: NaN, result: false },
	{ value: null, result: false },
	{ value: undefined, result: false },
];

export const valuesToTestObject: IValue[] = [
	{ value: { testString: 'testy', testNumber: 5.5, testBoolean: false }, result: true },
	{ value: 'test', result: false },
	{ value: '5', result: false },
	{ value: 5, result: false },
	{ value: NaN, result: false },
	{ value: null, result: false },
	{ value: undefined, result: false },
	{ value: false, result: false },
	{ value: ['false', 'true'], result: false },
	{ value: [{ a: 'test' }, { b: 'test' }], result: false },
];

export const valuesToTestArray: IValue[] = [
	{ value: [], result: true },
	{ value: [5, 10], result: true },
	{ value: ['a', 'b'], result: true },
	{ value: 5, result: false },
	{ value: NaN, result: false },
	{ value: null, result: false },
	{ value: undefined, result: false },
	{ value: false, result: false },
	{ value: { testString: 'testy', testNumber: 5.5, testBoolean: false }, result: false },
];

export const valuesToTestFunction: IValue[] = [
	{ value: Function, result: true },
	{ value: () => 5, result: true },
	{ value: () => 'test', result: true },
	{ value: 5, result: false },
	{ value: 'test', result: false },
	{ value: NaN, result: false },
	{ value: null, result: false },
	{ value: undefined, result: false },
	{ value: false, result: false },
	{ value: { testString: 'testy', testNumber: 5.5, testBoolean: false }, result: false },
];

export const valuesToTestArrayOf: IValue[] = [
	{ value: [5, 10, 15, 20], result: true, inner: Is.integer },
	{ value: [5, 10, 15, true], result: false, inner: Is.integer },
	{ value: [5, 'test', 15, 20], result: false, inner: Is.integer },
	{ value: [5, '10', 15, 20], result: false, inner: Is.integer },
	{ value: [5, 10.5, 15, 20], result: false, inner: Is.integer },

	{ value: [false, true, false, true], result: true, inner: Is.boolean },
	{ value: [false, 'true', false, true], result: false, inner: Is.boolean },
	{ value: [false, true, 5, true], result: false, inner: Is.boolean },

	{ value: [5, 10.16, 15, 20.55], result: true, inner: Is.number },
	{ value: [5, 10, 15, 20], result: true, inner: Is.number },
	{ value: [5, 10.16, 15, '25.55'], result: false, inner: Is.number },
	{ value: [5, 10.16, NaN, 20.55], result: false, inner: Is.number },

	{ value: [5, 10, 15, 20], result: true, inner: Is.integer },
	{ value: [5, 10, 15, true], result: false, inner: Is.integer },
	{ value: [5, 'test', 15, 20], result: false, inner: Is.integer },
	{ value: [5, '10', 15, 20], result: false, inner: Is.integer },
	{ value: [5, 10.5, 15, 20], result: false, inner: Is.integer },

	{ value: [5, 10, 15, 20], result: true, inner: Is.integer },
	{ value: [5, 10, 15, true], result: false, inner: Is.integer },
	{ value: [5, 'test', 15, 20], result: false, inner: Is.integer },
	{ value: [5, '10', 15, 20], result: false, inner: Is.integer },
	{ value: [5, 10.5, 15, 20], result: false, inner: Is.integer },

	{ value: ['a', 'b', 'c', 'd'], result: true, inner: Is.string },
	{ value: ['a', 'b', 'c', 5], result: false, inner: Is.string },
	{ value: ['a', true, 'c', 'd'], result: false, inner: Is.string },
	{ value: ['a', 'b', null, 'd'], result: false, inner: Is.string },

	{
		value: [
			{ testString: 'testy', testNumber: 5.5, testBoolean: false },
			{ testString: 'testy', testNumber: 5.5, testBoolean: false },
		],
		result: true,
		inner: Is.object,
	},
	{ value: [{ testString: 'testy', testNumber: 5.5, testBoolean: false }, 'test'], result: false, inner: Is.object },
	{ value: [{ testString: 'testy', testNumber: 5.5, testBoolean: false }, 5], result: false, inner: Is.object },
	{ value: [{ testString: 'testy', testNumber: 5.5, testBoolean: false }, true], result: false, inner: Is.object },
];
