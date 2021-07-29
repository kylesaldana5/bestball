// JavaScript program for the above approach

// Returns true if arr1[0..n-1] and arr2[0..m-1]
// contain same elements.
export function areEqual(arr1, arr2) {
	let n = arr1.length;
	let m = arr2.length;

	// If lengths of array are not equal means
	// array are not equal
	if (n != m) return false;

	// Sort both arrays
	arr1.sort();
	arr2.sort();

	// Linearly compare elements
	for (let i = 0; i < n; i++) if (arr1[i] != arr2[i]) return false;

	// If all elements were same.
	return true;
}
