// https://eslint.org/docs/latest/rules/constructor-super

class A extends B {
  constructor() { }  // Would throw a ReferenceError.
}

class C extends null {
  constructor() {
      super();  // Would throw a TypeError.
  }
}
