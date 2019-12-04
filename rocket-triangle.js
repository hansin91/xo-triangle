const triangle = (rows) => {
	for (let i = 1; i <= rows; i++) {
		let str = '';

		for (let j = i; j <= rows - 1; j++) {
			str += ' ';
		}

		for (let j = 1; j <= 2 * i - 1; j++) {
			if (j % 2 === 0) {
				str += 'o';
			} else {
				str += 'x';
			}
		}
		console.log(str);
	}
};
// triangle(3);
// console.log('\n');
// console.log('============================');
// console.log('\n');
// triangle(6);

const custom = (rows) => {
	for (let i = rows; i >= 1; i--) {
		let str = '';
		for (let j = 1; j <= 2 * rows - i; j++) {
			if (j >= i && j <= 2 * rows - i) {
				let start = j % 2 === 0 ? 'x' : 'o';
				if (i % 2 !== 0) {
					start = start === 'x' ? 'o' : 'x';
				}
				str += start;
			} else {
				str += ' ';
			}
		}
		console.log(str);
	}
};

custom(6);
