class Queue<T> {
    public current: T;
    public pool: T[];
    public running: boolean = true;

    constructor(pool: T[]) {
        this.pool = pool;
        this.current = this.pool.shift();
    }

    public next(): T | undefined {
        if (this.pool.length === 0) {
            this.running = false;
            return undefined;
        }
        this.current = this.pool.shift();
        return this.current;
    }

}

module.exports = Queue;