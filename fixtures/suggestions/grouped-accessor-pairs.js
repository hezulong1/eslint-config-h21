var foo = {
  get a() {
      return this.val;
  },
  b: 1,
  set a(value) {
      this.val = value;
  }
};

var bar = {
  a: 1,
  get b() {
      return this.val;
  }
}

class B {
  set a(v) {
    this.val = v;
  }

  get b() {
    return 1
  }

  get a() {
    return this.val;
  }
}