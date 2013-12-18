// BinaryTree constructor function

var BinaryTree = function() {
	this.head = null;
};

// Add an add method to the BinaryTree prototype

BinaryTree.prototype.add = function(value) {

	// Create a node to be inserted into the tree,
	// each new node will contain references to
	// possible left and right sub-nodes, but at
	// initialization these are left null.

	var node = {
		data: value,
		left: null,
		right: null
	};

	// This if clause handles the case where the 
	// item being added to the binary tree is the
	// first item in the tree. In this case, it is
	// added as the head.

	if (this.head === null) {
		this.head = node;
	} 

	// If the value being added is not the first one
	// continue along...

	else {
		
		// Establish a reference variable that will
		// keep track of whether or not the current
		// value has been inserted into the tree

		var inserted = false;
		
		// Establish a reference to the current point
		// in the tree that we are crawling, we'll
		// start with the head.

		var current = this.head;

		// The following block of code will loop
		// while the inserted value remains false.
		// It's important that we remember to set
		// that value to true once we've inserted
		// the value or we will have an infinite loop

		while (!inserted) {

			// This implementation will exclude
			// duplicate values.

			if (value === current.data) {
				console.log("Dupe - not added");
				inserted = true;
			}

			// If the value we are inserting is less
			// than the current data value, we know
			// that we need to traverse down the tree
			// to the left.

			else if (value < current.data) {
				
				// If there is no node to the left,
				// we know that we've found our spot
				// to insert.

				if (current.left === null) {
					current.left = node;
					inserted = true;
				}

				// Otherwise, we need to reset
				// current to the left node so
				// that when this while loop 
				// continues we are one step
				// further down the tree

				else {
					current = current.left;
				}
			} 
				// This else if block is identical
				// to the one above, except it is
				// checking if the correct place
				// to insert the value is to the 
				// right instead of the left
			else if (value > current.data) {
				if (current.right === null) {
					current.right = node;
					inserted = true;
				} else {
					current = current.right;
				}
			}
		}
	}
};

// Add an add array method to the BinaryTree
// prototype, this is different from add since
// it will allow us to populate a tree without
// adding the individual items one by one.
// Notice that it makes use of the add method
// that we just wrote.

BinaryTree.prototype.addArray = function(array) {
	array.forEach(this.add, this);
};

// Add a contains method to the BinaryTree prototype

BinaryTree.prototype.contains = function(value) {

	// Establish a reference variable that will
	// keep track of whether or not the value
	// has been determined to be in the list

	var inlist = false;

	// Establish a reference to the current point
	// in the tree that we are crawling, we'll
	// start with the head.	

	var current = this.head;

	// Create a while loop that will continue until
	// either of the two conditions is met:
	// 1. The value has been determined to be in
	// the list by the previous loop iteration
	// -- or --
	// 2. The current value is undefined as the
	// previous loop iteration determined

	while (!inlist && current) {

		// If the value we're checking for is less
		// than the current value, set current equal
		// to the node to the left of the current
		// value for the next loop

		if (value < current.data) {
			current = current.left;
		} 

		// If the value we're checking for is greater
		// than the current value, do the opposite

		else if (value > current.data) {
			current = current.right;
		} 

		// If the value we're checking for is equal
		// to the current value, set inlist to true

		else if (value === current.data) {
			inlist = true;
		}
	}

	// Once we're finished with the while loop that
	// will check for the item, return whether or
	// not the loop successfully found the item.
	// Remember that the loop could exit based on
	// two conditions, so it's possible for this
	// value to be either true or false. Neat.

	return inlist;
};

// Add a count method to the BinaryTree prototype

BinaryTree.prototype.count = function() {

	// Prevent this method from being called 
	// on an empty tree

	if (!this.head) {
		return;
	} 

	else {

		// We start the count at 1 since we know
		// the head exists. This count variable
		// will be accessible within the nested
		// functions in this method
		var count = 1;

		// Establish a reference to the current point
		// in the tree that we are crawling, we'll
		// start with the head
		current = this.head;

		// Invoke the countNodes function that is
		// defined below, starting with the head
		countNodes(current);
	}

	// We define a recursive function within this
	// method, follow closely because this function
	// will be recursively crawling through our
	// binary tree and incrementing the count.
	// The function goes from left to right, it 
	// may be easier to follow the function if you
	// draw a binary tree and actually run through
	// the code by hand...

	function countNodes(node) {

		// If the left node is not null, count it
		// and then invoke the countNodes function
		// again with left node as the new head

		if (node.left !== null) {
			count += 1;
			countNodes(node.left);
		}

		// If the right node is not null, count it
		// and then invoke the countNodes function
		// again with the right node as the new head

		if (node.right !== null) {
			count += 1;
			countNodes(node.right);
		}

		// Consider what's happening above for the 
		// following array of numbers:

		// [10, 7, 15, 3, 8, 12]

		// 10- Is there a left node? Yes +1
			// 7- Is there a left node? Yes +1
				// 3- Is there a left node? No
				// 3- Is there a right node? No
			// 7- Is there a right node? Yes +1
				// 8- Is there a left node? No
				// 8- Is there a right node? No
		// 10- Is there a right node? Yes +1
			// 15- Is there a left node? Yes +1
				// 12- Is there a left node? No
				// 12- Is there a right node? No
			// 15- Is there a right node? No

		// ************************************
		// Total = 6
		// Count starts at 1 for the head, and based
		// on the recursive function is increased
		// to 6, which matches the number of nodes
		// ************************************
		return count;
	}
};

BinaryTree.prototype.height = function() {
	// TODO: Either - 
	// A. Crawl the list to determine height
	// B. Keep a counter on insertion
};

BinaryTree.prototype.delete = function() {
	// TODO
	// take the largest value from the lefthand side, or the smallest value from the righthand side and replace with the deleted node
};


// The following code can be used to test this
// BinaryTree implementation, you may want to
// go through the code above and add console log
// statements where it makes sense.

// Create an instance of the BinaryTree class via
// the constructor function
// var bt = new BinaryTree();

// Add a few numbers to the tree using the add method
// bt.add(33);
// bt.add(19);
// bt.add(74);

// Add some more numbers using the array using the
// addArray method (remember that this actually
// makes use of the add method behind the scenes)
// bt.addArray([38, 13, 99, 48, 2, 59, 30, 9, 44, 34, 75]);

// Check if the tree contains a specific number
// bt.contains(30);

// Check if the tree contains a number that we know
// isn't in there (LOL, not really)
// bt.contains(42);

// Count how many nodes are in the tree
// bt.count();