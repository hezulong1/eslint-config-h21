// eslint-disable-next-line no-console
console.log('foo ', 'bar');

// no-useless-spread
const set = new Set([...iterable]);

// no-useless-promise-resolve-reject
const main = async foo => {
	if (foo > 4) {
		return Promise.reject(new Error('🤪'));
	}

	return Promise.resolve(result);
};

async function * generator() {
	yield Promise.resolve(result);
	yield Promise.reject(error);
}

// prefer-date-now
var d = new Date().getTime()
