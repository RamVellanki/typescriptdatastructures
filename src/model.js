"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    ;
    Person.prototype.hello = function () {
        return "Hello" + this.firstName + " " + this.lastName;
    };
    ;
    Person.prototype.print = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
exports.Person = Person;
;
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer(fName, lName, sal) {
        _super.call(this, fName, lName);
        this.salary = sal;
    }
    Developer.prototype.print = function () {
        console.log("Hello " + this.firstName + " " + this.lastName + ", your salary " + this.salary);
    };
    Developer.prototype.getSal = function () {
        return this.salary;
    };
    return Developer;
}(Person));
exports.Developer = Developer;
var d = new Developer("Ram", "Vellanki", 100000);
d.print();

//# sourceMappingURL=model.js.map
