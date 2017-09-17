/// <reference path="../../typings/requirejs/require.d.ts" />
/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
"use strict";
var Stack_1 = require("./Stack");
var expect = require('chai').expect;
describe('check stack operations', function () {
    it('should be able to push to stack', function () {
        var testStack = new Stack_1.Stack();
        testStack.push(2);
        expect(testStack.topElement()).to.equal(2);
    });
    it('should be able to pop from stack', function () {
        var testStack = new Stack_1.Stack();
        testStack.push(2);
        expect(testStack.pop()).to.equal(2);
    });
    it('should throw error when nothing to pop', function () {
        var testStack = new Stack_1.Stack();
        expect(function () {
            testStack.pop();
        }).to.throw('No elements to pop');
    });
});

//# sourceMappingURL=stack.test.js.map
