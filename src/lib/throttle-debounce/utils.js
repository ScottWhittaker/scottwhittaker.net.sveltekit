export function getNextIndex(currentIndex, length) {
	if (currentIndex + 1 < length) {
		return currentIndex + 1;
	}
	return currentIndex;
}

export function getPreviousIndex(currentIndex, length) {
	if (currentIndex > 0 && length > 1) {
		currentIndex = currentIndex - 1;
	}
	return currentIndex;
}
