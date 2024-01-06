some_unused_var = 42;

(function(foo, bar, baz, qux) {
  return bar;
})();

try {
  //...
} catch (err) {
  console.error("errors");
}

const [a, _b, c] = ["a", "b", "c"];
console.log(a+c);

