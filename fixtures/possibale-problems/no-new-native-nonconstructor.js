// throws a TypeError
let foo = new Symbol("foo");

// throws a TypeError
let result = new BigInt(9007199254740991);

var foo1 = Symbol('foo');
var bar1 = BigInt(9007199254740991);

// Ignores shadowed Symbol.
function baz(Symbol) {
    const qux = new Symbol("baz");
}
function quux(BigInt) {
    const corge = new BigInt(9007199254740991);
}