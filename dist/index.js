"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
/**
 * Parses a string of argument or an array
 * @param args string[] - Input arguments
 * @param availableArgs string[] - Available arguments
 * @param patraOptions PatraOptions
 * @returns object
 */
function parse(args, availableArgs, patraOptions) {
    var res = { '_': '' };
    var curr = '_';
    //TODO remove this janky if else 
    if (patraOptions) {
        if (patraOptions.prefix) {
            args.forEach(function (e) {
                if (availableArgs.indexOf(e.substring(patraOptions.prefix.length)) !== -1) {
                    curr = e.substring(patraOptions.prefix.length);
                    res[curr] = '';
                }
                else {
                    res[curr] += e;
                }
            });
        }
    }
    else {
        args.forEach(function (e) {
            if (availableArgs.indexOf(e) !== -1) {
                curr = e;
                res[curr] = '';
            }
            else {
                res[curr] += e;
            }
        });
    }
    return res;
}
exports.parse = parse;
