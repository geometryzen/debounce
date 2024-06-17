/**
 * Create a debounced function from a function that takes arguments and returns a value.
 * @param callback The function to be de-bounced.
 * @param timeoutMillis The debounce time in milliseconds.
 * @returns A function with the same arguments as the callback, but returning a Promise of the callback return value.
 */
export function debounce<T extends unknown[], U>(callback: (...args: T) => PromiseLike<U> | U, timeoutMillis: number = 500) {
    let handle: ReturnType<typeof setTimeout>;
    // let handle: number | undefined
    return (...args: T): Promise<U> => {
        clearTimeout(handle);
        return new Promise<U>((resolve, reject) => {
            handle = setTimeout(() => {
                try {
                    resolve(callback(...args));
                } catch (e) {
                    reject(e);
                }
            }, timeoutMillis);
        });
    };
}
