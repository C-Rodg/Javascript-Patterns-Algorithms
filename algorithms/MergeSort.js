function mergeSort(arr) {
	if(arr.length < 2) {
		return arr;
	}

	let middle = parseInt(arr.length / 2);
	let left = arr.slice(0, middle);
	let right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let result = [];
	console.log(left, right);
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while (left.length) {
		result.push(left.shift());
	}

	while (right.length) {
		result.push(right.shift());
	}

	return result;
}