const suggestions = require('./_suggestions');

module.exports = {
  'constructor-super': 0, // ts(2335) & ts(2377)
  'getter-return': 0, // ts(2378)
  'no-const-assign': 0, // ts(2588)
  'no-dupe-args': 0, // ts(2300)
  'no-dupe-class-members': 0, // ts(2393) & ts(2300)
  'no-dupe-keys': 0, // ts(1117)
  'no-func-assign': 0, // ts(2630)
  'no-import-assign': 0, // ts(2632) & ts(2540)
  'no-new-symbol': 0, // ts(7009)
  'no-obj-calls': 0, // ts(2349)
  'no-redeclare': 0, // ts(2451)
  'no-setter-return': 0, // ts(2408)
  'no-this-before-super': 0, // ts(2376) & ts(17009)
  'no-undef': 0, // ts(2304) & ts(2552)
  'no-unreachable': 0, // ts(7027)
  'no-unsafe-negation': 0, // ts(2365) & ts(2322) & ts(2358)
  'no-var': suggestions['no-var'], // ts transpiles let/const to var, so no need for vars any more
  'prefer-const': suggestions['prefer-const'], // ts provides better types with const
  'prefer-rest-params': suggestions['prefer-rest-params'], // ts provides better types with rest args over arguments
  'prefer-spread': suggestions['prefer-spread'], // ts transpiles spread to apply, so no need for manual apply
};
