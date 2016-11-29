function binarySearch(items, value) {
	let startIndex = 0,
		stopIndex = items.length - 1,
		middle = Math.floor((startIndex + stopIndex) / 2);

	while(value !== items[middle] && startIndex < stopIndex) {
		if(value < items[middle]) {
			stopIndex = middle - 1;
		} else if (value > items[middle]) {
			startIndex = middle + 1;
		}
		middle = Math.floor((startIndex + stopIndex) / 2);
	}

	return (value === items[middle]) ? middle : -1;
}