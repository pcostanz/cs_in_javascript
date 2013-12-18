
// LinkedList constructor function

var LinkedList = function() {
	this.head = null;
};

// Add insert method to the LinkedList prototype

LinkedList.prototype.insert = function(value){

	// If the head is empty, append the value there

	if (this.head === null) {
		this.head = {
			data: value,
			next: null
		};
	}

	// Otherwise, iterate through the list with a
	// while loop until we discover a list item
	// that does not contain a reference to a next
	// item, at this point we add the new value to
	// the end of the list.

	else {
		var temp = this.head;
		while(temp.next !== null){
			temp = temp.next;
		}
		temp.next = {
			data: value,
			next: null
		};
	}
};

// Add delete method to the LinkedList prototype

LinkedList.prototype.delete = function(index){

	// Start the method with a reference to previous,
	// current, and next. For the list head item
	// these will both be the same.

	var previous = this.head;
	var current = this.head;
	var next = current.next;

	// Iterate through the list using a for-loop in
	// order to traverse to the index that we intend
	// to remove. Traversal requires that we establish
	// references to previous, current and next at
	// each step so that we can remove the reference
	// to current once we reach it.

	for(var i = 0; i < index; i++){
		previous = current;
		current = next;
		next = next.next;
	}

	// We effectively remove the current list item
	// by removing all references to it in the chain

	previous.next = current.next;

};

// Add a print method to the LinkedList prototype

LinkedList.prototype.print = function(){

	// Create a container array to store each data
	// item from the list

	var listArray = [];

	// Set a reference variable to use when iterating through the list
	var current = this.head;

	// While current is truthy (not undefined in 
    // this case), push the data item at that link
	// to the reference array. This should add all
	// of the current list items to the array to be
	// returned once the entire list is traversed

	while(current){
		listArray.push(current.data);
		current = current.next;
	}
	
	return ListArray;
};

// The following code can be used to test this
// LinkedList implementation, you may want to
// go through the code above and add console log
// statements where it makes sense.

// Create an instance of the LinkedList class via
// the constructo function
// var ll = new LinkedList();

// Insert some data items into the linked list
// ll.insert("a");
// ll.insert("b");
// ll.insert("c");

// Delete one of the items from the list
//ll.delete(1);

// Print the list
// ll.print();