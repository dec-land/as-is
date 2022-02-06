"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.valuesToTestArrayOf = exports.valuesToTestFunction = exports.valuesToTestArray = exports.valuesToTestObject = exports.valuesToTestDate = exports.valuesToTestString = exports.valuesToTestBoolean = exports.valuesToTestInteger = exports.valuesToTestPrimitive = exports.valuesToTestNumber = void 0;
var __1 = __importDefault(require(".."));
// TODO - combine these? Lots of duplication
exports.valuesToTestNumber = [
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
exports.valuesToTestPrimitive = [
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
exports.valuesToTestInteger = [
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
exports.valuesToTestBoolean = [
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
exports.valuesToTestString = [
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
exports.valuesToTestDate = [
    { value: new Date(), result: true },
    { value: 'test', result: false },
    { value: '', result: false },
    { value: 5, result: false },
    { value: Infinity, result: false },
    { value: NaN, result: false },
    { value: null, result: false },
    { value: undefined, result: false },
];
exports.valuesToTestObject = [
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
exports.valuesToTestArray = [
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
exports.valuesToTestFunction = [
    { value: Function, result: true },
    { value: function () { return 5; }, result: true },
    { value: function () { return 'test'; }, result: true },
    { value: 5, result: false },
    { value: 'test', result: false },
    { value: NaN, result: false },
    { value: null, result: false },
    { value: undefined, result: false },
    { value: false, result: false },
    { value: { testString: 'testy', testNumber: 5.5, testBoolean: false }, result: false },
];
exports.valuesToTestArrayOf = [
    { value: [5, 10, 15, 20], result: true, inner: __1.default.integer },
    { value: [5, 10, 15, true], result: false, inner: __1.default.integer },
    { value: [5, 'test', 15, 20], result: false, inner: __1.default.integer },
    { value: [5, '10', 15, 20], result: false, inner: __1.default.integer },
    { value: [5, 10.5, 15, 20], result: false, inner: __1.default.integer },
    { value: [false, true, false, true], result: true, inner: __1.default.boolean },
    { value: [false, 'true', false, true], result: false, inner: __1.default.boolean },
    { value: [false, true, 5, true], result: false, inner: __1.default.boolean },
    { value: [5, 10.16, 15, 20.55], result: true, inner: __1.default.number },
    { value: [5, 10, 15, 20], result: true, inner: __1.default.number },
    { value: [5, 10.16, 15, '25.55'], result: false, inner: __1.default.number },
    { value: [5, 10.16, NaN, 20.55], result: false, inner: __1.default.number },
    { value: [5, 10, 15, 20], result: true, inner: __1.default.integer },
    { value: [5, 10, 15, true], result: false, inner: __1.default.integer },
    { value: [5, 'test', 15, 20], result: false, inner: __1.default.integer },
    { value: [5, '10', 15, 20], result: false, inner: __1.default.integer },
    { value: [5, 10.5, 15, 20], result: false, inner: __1.default.integer },
    { value: [5, 10, 15, 20], result: true, inner: __1.default.integer },
    { value: [5, 10, 15, true], result: false, inner: __1.default.integer },
    { value: [5, 'test', 15, 20], result: false, inner: __1.default.integer },
    { value: [5, '10', 15, 20], result: false, inner: __1.default.integer },
    { value: [5, 10.5, 15, 20], result: false, inner: __1.default.integer },
    { value: ['a', 'b', 'c', 'd'], result: true, inner: __1.default.string },
    { value: ['a', 'b', 'c', 5], result: false, inner: __1.default.string },
    { value: ['a', true, 'c', 'd'], result: false, inner: __1.default.string },
    { value: ['a', 'b', null, 'd'], result: false, inner: __1.default.string },
    {
        value: [
            { testString: 'testy', testNumber: 5.5, testBoolean: false },
            { testString: 'testy', testNumber: 5.5, testBoolean: false },
        ],
        result: true,
        inner: __1.default.object,
    },
    { value: [{ testString: 'testy', testNumber: 5.5, testBoolean: false }, 'test'], result: false, inner: __1.default.object },
    { value: [{ testString: 'testy', testNumber: 5.5, testBoolean: false }, 5], result: false, inner: __1.default.object },
    { value: [{ testString: 'testy', testNumber: 5.5, testBoolean: false }, true], result: false, inner: __1.default.object },
];
