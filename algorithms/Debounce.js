function debounce(func, immediate, wait) {
	let timeout;

	return function() {
		let context = this,
			args = arguments;

		let callNow = immediate && !timeout;
		clearTimeout(timeout);

		timeout = setTimeout(function(){
			timeout = null;
			if(!immediate){
				func.apply(context, args);
			}
		}, wait || 400);

		if(callNow){
			func.apply(context, args);
		}
	}
}