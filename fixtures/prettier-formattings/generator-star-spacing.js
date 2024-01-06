function * generator() {}

let anonymous = function* () {};

let shorthand = { *generator() {} };

class Class { static* method() {} }
