var MinHeap = function() {
	this.heap = [];
}

MinHeap.prototype.upheap = function(n) {
	while (n > 0) {
		var elem = this.heap[n];
		var index = Math.floor(n/2);
		var parent = this.heap[index];

		if (elem > parent){
			return;
		}

		this.heap[index] = elem;
		this.heap[n] = parent;
		n = index;
	}
}

MinHeap.prototype.insert = function(data) {
	this.heap.push(data);
	this.upheap(this.heap.length - 1);
}