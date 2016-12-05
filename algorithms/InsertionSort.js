function insertionSort(vals) {
	let len = vals.length;
	for(let i = 1; i < len; i++) {
		let temp = vals[i];
		let j = i - 1;
		for(; j >= 0 && vals[j] > temp; --j){
			vals[j+1] = vals[j];
		}
		vals[j+1] = temp;
	}
	return vals;
}