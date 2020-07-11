type PatraOptions = {
    label? : string
    doubleDash? : boolean
    prefix? : string
}

/**
 * Parses a string of argument or an array
 * @param args string[] - Input arguments
 * @param availableArgs string[] - Available arguments
 * @param patraOptions PatraOptions
 * @returns object
 */

export function parse (args : string[], availableArgs : string[], patraOptions? : PatraOptions) : Object {
    const res = { _: '' }
    let curr = '_'

    // TODO remove this janky if else

    if (patraOptions) {
        if (patraOptions.prefix) {
            args.forEach(e => {
                if (availableArgs.indexOf(e.substring(patraOptions.prefix.length)) !== -1) {
                    curr = e.substring(patraOptions.prefix.length)
                    res[curr] = ''
                } else {
                    res[curr] += e
                }
            })
        }
    } else {
        args.forEach(e => {
            if (availableArgs.indexOf(e) !== -1) {
                curr = e
                res[curr] = ''
            } else {
                res[curr] += e
            }
        })
    }

    return res
}
