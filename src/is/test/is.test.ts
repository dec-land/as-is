import Is from "..";
import "jest-extended";
import {
  IValue,
  valuesToTestInteger,
  valuesToTestNumber,
  valuesToTestBoolean,
  valuesToTestObject,
  valuesToTestString,
  valuesToTestArrayOf,
  valuesToTestArray,
  valuesToTestFunction,
  valuesToTestDate,
  valuesToTestPrimitive,
} from "./is.test.data";

const testIs = async (
  isFunction: (
    v: unknown,
    inner?: ((value: unknown) => unknown) | boolean
  ) => unknown,
  valuesToTest: IValue[]
) => {
  valuesToTest.forEach(({ value, result, inner }) => {
    Is.function(inner)
      ? expect(isFunction(value, inner))[result ? "toBeTrue" : "toBeFalse"]()
      : expect(isFunction(value))[result ? "toBeTrue" : "toBeFalse"]();
  });
};

describe("Is", () => {
  it("Should return whether a value is number", () =>
    testIs(Is.number, valuesToTestNumber));
  it("Should return whether a value is an integer", () =>
    testIs(Is.integer, valuesToTestInteger));
  it("Should return whether a value is a boolean", () =>
    testIs(Is.boolean, valuesToTestBoolean));
  it("Should return whether a value is an object", () =>
    testIs(Is.object, valuesToTestObject));

  it("Should return whether a value is a string", () =>
    testIs(Is.string, valuesToTestString));
  it("Should return whether a value is an array", () =>
    testIs(Is.array, valuesToTestArray));

  it("Should return whether a value is a function", () =>
    testIs(Is.function, valuesToTestFunction));

  it("Should return whether a value is a date", () =>
    testIs(Is.date, valuesToTestDate));
  it("Should return whether a value is a date", () =>
    testIs(Is.primitive, valuesToTestPrimitive));
  it("Should return whether a value is an array of a given type", () =>
    testIs(Is.arrayOf, valuesToTestArrayOf));
});
