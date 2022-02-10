const quickSort = (list) => {
	if (list.length  < 2) return list;
	let pivot = list[0];
	let less = list.slice(1, list.length).filter(item => item <= pivot);
	let greater = list.slice(1, list.length).filter(item => item > pivot);

	return quickSort(less).concat(pivot, quickSort(greater));
};
