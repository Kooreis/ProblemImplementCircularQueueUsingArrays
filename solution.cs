enqueue(item) {
        if (this.queue[this.write] === null) {
            this.queue[this.write++] = item;

            if (this.write > this.max) this.write = 0;
            return item;
        }
        return null;
    }