/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

var model = require('../src/model');

var expect = require('chai').expect;
describe('developer model test', () => {
    it('salary should get updated', () => {
        var d = new model.Developer("Ram", "Vellanki", 1000);
        expect(d.getSal()).to.equal(1000);
    });
});