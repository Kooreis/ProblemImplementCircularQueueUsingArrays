Here is a TypeScript solution for implementing a circular queue using arrays:

```typescript
class CircularQueue {
    private queue: Array<number>;
    private front: number;
    private rear: number;
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    enqueue(element: number) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue is full");
            return;
        } else if (this.front === -1) {
            this.front = this.rear = 0;
        } else {
            this.rear = (this.rear + 1) % this.size;
        }
        this.queue[this.rear] = element;
    }

    dequeue() {
        if (this.front === -1) {
            console.log("Queue is empty");
            return;
        } else if (this.front === this.rear) {
            let temp = this.queue[this.front];
            this.front = this.rear = -1;
            return temp;
        } else {
            let temp = this.queue[this.front];
            this.front = (this.front + 1) % this.size;
            return temp;
        }
    }

    display() {
        if (this.front === -1) {
            console.log("No elements in Queue");
        } else if (this.rear >= this.front) {
            for (let i = this.front; i <= this.rear; i++) {
                console.log(this.queue[i]);
            }
        } else {
            for (let i = this.front; i < this.size; i++) {
                console.log(this.queue[i]);
            }
            for (let i = 0; i <= this.rear; i++) {
                console.log(this.queue[i]);
            }
        }
    }
}

let q = new CircularQueue(5);
q.enqueue(14);
q.enqueue(22);
q.enqueue(13);
q.enqueue(-6);
q.display();
console.log("Deleted value = " + q.dequeue());
console.log("Deleted value = " + q.dequeue());
q.display();
q.enqueue(9);
q.enqueue(20);
q.enqueue(5);
q.display();
```

This code creates a class `CircularQueue` with methods to enqueue, dequeue and display the queue. The queue is implemented using an array and two pointers, `front` and `rear`, to keep track of the start and end of the queue. The queue is considered full when the rear pointer is one position behind the front pointer, and empty when both pointers are at -1.