class MyHashSet {
    constructor() {
        this.size = 1000;
        this.buckets = new Array(this.size)
            .fill(null)
            .map(() => []);
    }

    hash(key) {
        return key % this.size;
    }

    add(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    remove(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        this.buckets[index] = bucket.filter(num => num !== key);
    }

    contains(key) {
        let index = this.hash(key);
        return this.buckets[index].includes(key);
    }
}