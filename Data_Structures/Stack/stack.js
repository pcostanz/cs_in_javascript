// Stack constructor function

var Stack = function() {
	this.tail = null;
	this.size = 0;
}

Stack.prototype.push = function(value) {
	if (this.tail === null) {
		this.tail = {prev: null, data: value}
	} else {
		this.tail = {prev: this.tail, data: value}
	}

	this.size += 1;
}

Stack.prototype.pop = function() {
	if (this.tail === null) {
		console.log("Error, stack is empty");
		return;
	} else {
		var popped = this.tail.data;
		this.tail = this.tail.prev;
		console.log(popped);
		return popped;
	}
}

var stack = new Stack();
stack.push("first");
stack.push("second");

stack.pop();