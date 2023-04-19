class Queue<T> {
    private current: T;
    private pool: T[];
    public running: boolean = true;

    constructor(pool: T[]) {
        this.pool = pool;
    }

    public next(): T | undefined {
        if (this.pool.length <= 1) {
            this.running = false;
        }
        this.current = this.pool.shift();
        return this.current;
    }

}

module.exports = Queue;