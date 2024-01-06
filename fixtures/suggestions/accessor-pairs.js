var o = {
  set a(value) {
      this.val = value;
  }
};

var o1 = {
  get a() {
      return this.val;
  }
};

var o2 = {d: 1};
Object.defineProperty(o2, 'c', {
    set: function(value) {
        this.val = value;
    }
});

var o3 = {d: 1};
Object.defineProperty(o3, 'c', {
    get: function() {
        return this.val;
    }
});

var o4 = {
  get a() {
      return this.val;
  },
  a: 1,
  set a(value) {
      this.val = value;
  }
};

