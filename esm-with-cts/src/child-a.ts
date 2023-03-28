export const foo = (): Promise<string> => {
    return new Promise(
        (resolve) => {
            setTimeout(() => resolve('foo'), 3000);
        }
    );
}
