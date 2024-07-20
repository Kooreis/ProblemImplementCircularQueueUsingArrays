Here is a JavaScript implementation of a circular queue using arrays:

```javascript
class CircularQueue {
    constructor(size) {
        this.queue = [];
        this.read = 0;
        this.write = 0;
        this.max = size - 1;

        while (size > 0) {
            this.queue.push(null);
            size--;
        }
    }

    enqueue(item) {
        if (this.queue[this.write] === null) {
            this.queue[this.write++] = item;

            if (this.write > this.max) this.write = 0;
            return item;
        }
        return null;
    }

    dequeue() {
        if (this.queue[this.read] != null) {
            let item = this.queue[this.read];
            this.queue[this.read++] = null;
            if (this.read > this.max) this.read = 0;
            return item;
        }
        return null;
    }

    print() {
        return this.queue;
    }
}

const circularQueue = new CircularQueue(5);
console.log(circularQueue.enqueue('a')); // a
console.log(circularQueue.enqueue('b')); // b
console.log(circularQueue.enqueue('c')); // c
console.log(circularQueue.dequeue()); // a
console.log(circularQueue.enqueue('d')); // d
console.log(circularQueue.print()); // [ null, 'b', 'c', 'd', null ]
```

This code defines a `CircularQueue` class with `enqueue`, `dequeue`, and `print` methods. The `enqueue` method adds an item to the queue at the current write position, then advances the write position. If the write position exceeds the maximum index of the array, it wraps around to the beginning. The `dequeue` method removes an item from the queue at the current read position, then advances the read position in the same way. The `print` method returns the current state of the queue.