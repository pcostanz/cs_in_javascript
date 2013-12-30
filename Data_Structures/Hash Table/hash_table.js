var HashTable = function(size) {
    this.hashlength = size;
    this.elements = 0;
    this.arr = [];
};

HashTable.prototype.hashFunc = function(data) {
    return Math.floor(data % this.hashlength);
};

HashTable.prototype.insert = function(key, value) {
    this.elements++;

    var key = this.hashFunc(key);
    var container = {};
    if (this.arr[key]) {
        container[key] = value;
        if (this.arr[key].length) {
            this.arr[key] = [];
        } else {
            this.arr[key] = [this.arr[key]];
        }
        this.arr[key].push(container);
    } else {
        container[key] = value;
        this.arr[key] = container;
    }
};

HashTable.prototype.has = function(search) {
    var hashResult = this.arr[this.hashFunc(search)];
    if (hashResult) {
        if (!(hashResult.length)) {
            if (Object.keys(hashResult) == search) {
                return true;
            }
        } else {
            for (var i = 0; i < hashResult.length; i++) {
                if (Object.keys(hashResult[i]) == search) {
                    return true;
                }
            }
        }
    }
    return false;
};