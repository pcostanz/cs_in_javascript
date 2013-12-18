
// DLinkedList constructor function - we're going
// to keep track of both the head and the tail
// in this linked list implementation

var DLinkedList = function() {
	this.head = null;
	this.tail = null;
};

// If you've taken a glance at my other linked
// list implementation, you will notice that I
// didn't create a class (constructor function)
// for nodes being added to the list. Since there
// will be multiple methods on this list, the first
// thing we will do is to add a constuctor to create
// a new node to append


var Node = function(value){

	// In a doubly linked list, each node will have
	// its own data, along with references to both
	// the previous and next nodes in the chain

	this.data = value;
	this.prev = null;
	this.next = null;
}

// In a singly linked list we only need one insert
// method since it is only possible to append, in
// a doubly linked list we will have both an
// append and a prepend method which will allow us
// to insert at the head or the tail of the list

// Add prepend method to the DLinkedList prototype

DLinkedList.prototype.prepend = function(value){

	// Create an instance of the node class

	var node = new Node(value);

	// If the head is empty, prepend the value there.
	// Since we know this is the only list item we
	// can also set the tail equal to this node

	if (this.head === null) {
		this.head = node;
		this.tail = node;
	}

	else {
		this.head.prev = node;
		node.next = this.head;
		this.head = node;


		// node.next = this.head;
		// this.head.prev = node;
		// this.head = node;
	}

};

var dll = new DLinkedList();
dll.prepend("wut");
console.log(dll);
console.log("********");
dll.prepend("before_wut");
console.log(dll);
console.log("********");
dll.prepend("before_before_wut");
console.log(dll);
console.log("********");

// The following code can be used to test this
// DLinkedList implementation, you may want to
// go through the code above and add console log
// statements where it makes sense.

// Create an instance of the DLinkedList class via
// the constructor function
// var ll = new DLinkedList();

// Insert some data items into the linked list
// ll.insert("a");
// ll.insert("b");
// ll.insert("c");

// Delete one of the items from the list
//ll.delete(1);

// Print the list
// ll.print();