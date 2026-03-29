function bubbleSort(arr) {
    const sorted = [...arr];
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - i - 1; j++) {
            if (sorted[j] > sorted[j + 1]) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }
    return sorted;
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }

    return -1;
}

const orderTotals = [240, 89, 112, 460, 53, 300];
const sortedOrderTotals = bubbleSort(orderTotals);

console.log("Order totals unsorted:", orderTotals);
console.log("Order totals sorted:", sortedOrderTotals);
console.log("Linear search for 112 (unsorted data):", linearSearch(orderTotals, 112));
console.log("Binary search for 300 (sorted data):", binarySearch(sortedOrderTotals, 300));
