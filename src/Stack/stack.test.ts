/// <reference path="../../typings/requirejs/require.d.ts" />
/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import { Stack } from "./Stack";

var expect = require('chai').expect;
describe('check stack operations', () => {
    it('should be able to push to stack', () => {
        let testStack = new Stack();
        testStack.push(2);
        expect(testStack.topElement()).to.equal(2);
    });
    it('should be able to pop from stack', () => {
        var testStack = new Stack();
        testStack.push(2);
        expect(testStack.pop()).to.equal(2);
    });
    it('should throw error when nothing to pop', () => {
        var testStack = new Stack();
        expect(function(){
            testStack.pop()
        }).to.throw('No elements to pop');
    });
});