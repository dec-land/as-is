export interface IValue {
    value: unknown;
    result: boolean;
    inner?: (value: unknown) => unknown;
}
export declare const valuesToTestNumber: IValue[];
export declare const valuesToTestPrimitive: IValue[];
export declare const valuesToTestInteger: IValue[];
export declare const valuesToTestBoolean: IValue[];
export declare const valuesToTestString: IValue[];
export declare const valuesToTestDate: IValue[];
export declare const valuesToTestObject: IValue[];
export declare const valuesToTestArray: IValue[];
export declare const valuesToTestFunction: IValue[];
export declare const valuesToTestArrayOf: IValue[];
