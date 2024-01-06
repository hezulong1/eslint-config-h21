// https://eslint.org/docs/latest/rules/getter-return

p = {
  get name(){
      // no returns.
  }
};

Object.defineProperty(p, "age", {
  get: function (){
      // no returns.
  }
});

class P{
  get name(){
      // no returns.
  }
}
