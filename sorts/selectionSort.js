const selectionSort = (list) => {
	for (let i = 0; i < list.length - 1; i++) {
		let min = i;
		for (let j = i+1; j < list.length; j++)
			if(list[j] < list[min]) min = j;
		let t = list[min];
		list[min] = list[i];
		list[i] = t;
	}

	return list;
};
