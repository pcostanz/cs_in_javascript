var nums = [2, 4, 1, 5, 8];


function mergeSort(array) {
    // Recursion base case
    if (array.length < 2) {
        return array;
    }

    // Split the array into two equally sized chunks
    var midpoint = Math.floor(array.length / 2);
    var left = array.slice(0, midpoint);
    var right = array.slice(midpoint + 1);

    // Sort each chunk using merge sort
    var leftSorted = mergeSort(left);
    var rightSorted = mergeSort(right);

    // Combine the chunks back into a single array and return it
    var sortedResult = [];
    while (!leftSorted.isEmpty && !rightSorted.isEmpty) {

        if (leftSorted.isEmpty) {
            sortedResult.concat(rightSorted);
            rightSorted = []; // or break;
        }

        if (rightSorted.isEmpty) {
            sortedResult.concat(leftSorted);
            leftSorted = [];
        }

        var elem = (leftSorted[0] < rightSorted[0]) ? leftSorted.shift() : rightSorted.shift();
        sortedResult.push(elem);
    }
    console.log(sortedResult);
    return sortedResult;

}

mergeSort(nums);