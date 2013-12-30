// Stack constructor function

var Stack = function() {
    this.top = null;
    this.size = 0;
}

Stack.prototype.push = function(value) {
    if (this.top === null) {
        this.top = {
            prev: null,
            data: value
        }
    } else {
        this.top = {
            prev: this.top,
            data: value
        }
    }

    this.size += 1;
}

Stack.prototype.pop = function(callback) {
    var err = null;
    var popped = null;

    if (this.top === null) {
        err = "Underflow Error";
    } else {
        popped = this.top.data;
        this.top = this.top.prev;
        this.size -= 1;
    }

    if (callback) {
        callback(err, popped);
    }
}

Stack.prototype.print = function() {
    var current = this.top;
    var tempStack = [];

    while (current !== null) {
        tempStack.unshift(current.data);
        current = current.prev;
    }
    return tempStack;
}

var popSuccessCheck = function(err, popped) {
    console.log("err = " + err);
    console.log("poppedr = " + popped);
}

var stack = new Stack();
stack.push("first");
stack.push("second");

stack.pop();