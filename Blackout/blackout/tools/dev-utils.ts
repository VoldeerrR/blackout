export function log(message: string): void {
    console.log(`[DEV LOG] ${message}`);
}

export function warn(message: string): void {
    console.warn(`[DEV WARN] ${message}`);
}

export function error(message: string): void {
    console.error(`[DEV ERROR] ${message}`);
}

export function assert(condition: boolean, message: string): void {
    if (!condition) {
        throw new Error(`[DEV ASSERT] ${message}`);
    }
}

export function measureExecutionTime(fn: Function, ...args: any[]): number {
    const start = performance.now();
    fn(...args);
    const end = performance.now();
    return end - start;
}