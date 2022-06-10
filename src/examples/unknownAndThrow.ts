let anyIsBack: any;
anyIsBack = 3;
anyIsBack = "test";
anyIsBack = 5;

let stringTest: string = "verify";
stringTest = anyIsBack;

let unknownValue: unknown;
unknownValue = 3;
unknownValue = "hey";
unknownValue = true;
unknownValue = "gogo";

let stringTest2: string = "lets go";
//stringTest2 = unknownValue;

if (typeof unknownValue === "string") {
  stringTest2 = unknownValue;
}

function throwError(errorObj: string, codeNumber: number): never {
  throw { error: errorObj, code: codeNumber };
}

throwError("oppppss", 500);
