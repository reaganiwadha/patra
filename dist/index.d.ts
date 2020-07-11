declare type PatraOptions = {
    label?: string;
    doubleDash?: boolean;
    prefix?: string;
};
/**
 * Parses a string of argument or an array
 * @param args string[] - Array of arguments
 * @returns object
 */
export declare function parse(args: string[], availableArgs: string[], patraOptions?: PatraOptions): Object;
export {};
