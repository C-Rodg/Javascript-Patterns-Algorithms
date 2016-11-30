function flattenArray(input) {
	let out = [];
	let loop = function(arr){
		return arr.map((val) => {
			return Array.isArray(val) ? loop(val) : out.push(val);
		});
	};
	loop(input);
	return out;
}