var Queue = function() {
	this.back = null;
	this.front = null;
	this.size = 0;
}

Queue.prototype.add = function (data) {
	var node = {
		data: data;
		next: null;
		prev: null;
	};

	if (this.back === null) {
		this.back = item;
		this.front = item;
	} else {
		item.next = this.back;
		this.back.prev = item;
		this.back = item;
	}

	this.size += 1;
	}
}

Queue.prototype.remove = function(callback) {
	var err = null;
	var removed = null;

	if (this.front === null) {
		err = "Underflow, queue empty"
	} else {
		removed = this.front.data;
		this.front = this.front.prev;

		this.size -= 1;
	}

	callback(err, removed);
}

Queue.prototype.print = function(){
	var current = this.front;
	var tempQueue = [];

	while (current !== null) {
		tempQueue.push(current.data);
		current = current.prev;
	}
	return tempQueue;
}

var removeCheck = function(err, removed) {
	console.log("err = " + err);
	console.log("removed = " + removed);
}