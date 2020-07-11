const patra = require('../dist/index')
const expect = require('chai').expect
const assert = require('chai').assert

describe('Parsing', () => {
    it('should return john', () => {
        const result = patra.parse(['name', 'john'], ['name'])
        expect(result).to.include({'name' : 'john'})
    })
    it('should work with prefixes', () => {
        const result = patra.parse(['.name', 'john', '.level', '3'], ['name', 'level'], {prefix : '.'})
        expect(result).to.include({'name' : 'john', 'level': '3'})
    })
})
