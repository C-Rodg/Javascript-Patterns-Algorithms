function bubbleSort(vals) {
	let len = vals.length - 1;
	let swapped;
	do {
		swapped = false
		for(let i = 0; i < len; i++) {
			if (vals[i] > vals[i+1]) {
				let temp = vals[i];
				vals[i] = vals[i+1];
				vals[i+1] = temp;
				swapped = true;
			}
		}
	}
	while(swapped == true);
	return vals;
}