// Stack constructor function

var Stack = function() {
	this.top = null;
	this.size = 0;
}

Stack.prototype.push = function(value) {
	if (this.top === null) {
		this.top = {prev: null, data: value}
	} else {
		this.top = {prev: this.top, data: value}
	}

	this.size += 1;
}

Stack.prototype.pop = function() {
	if (this.top === null) {
		console.log("Error, underflow");
		return;
	} else {
		var popped = this.top.data;
		this.top = this.top.prev;
		this.size -= 1;
		console.log(popped);
		return popped;
	}
}

Stack.prototype.print = function() {

	console.log("printing");
	var current = this.top;
	var tempStack = [];

	while (current !== null) {
		tempStack.unshift(current.data);
		current = current.prev;
	}
	console.log(tempStack);
	return tempStack;
}

var stack = new Stack();
stack.push("first");
stack.push("second");

stack.pop();