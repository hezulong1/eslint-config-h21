exports.$ = n => ' '.repeat(n);
exports.green = msg => `\u001B[32m${msg}\u001B[39m`;
exports.uniq = a => Array.from(new Set(a));
exports.join = a => a.filter(Boolean).join('\n');

const digit = (number, length = 2) => (String(number)).padStart(length, '0');
exports.now = () => {
  const date = new Date();
  const ymd = [digit(date.getFullYear(), 4), digit(date.getMonth() + 1), digit(date.getDate())];
  const hms = [digit(date.getHours()), digit(date.getMinutes()), digit(date.getSeconds())];
  return `${ymd.join('-')} ${hms.join(':')}`;
};
