const linearSearch = (list, e) => {
	for(let i = 0; i < list.length; i++) {
		if (list[i] === e) return i;
	}

	return -1;
};
