class MyHashSet {
    constructor() {
        this.set = new Array(1000001).fill(false);
    }

    hash(key) {
        return key % this.size;
    }

    add(key) {
        this.set[key] = true;
    }

    remove(key) {
        this.set[key] = false;
    }

    contains(key) {
        return this.set[key];
    }
}