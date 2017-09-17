"use strict";
var Stack = (function () {
    function Stack() {
        this.top = 0;
        this.stack = new Array();
    }
    Stack.prototype.push = function (elem) {
        if (elem != null || elem != undefined) {
            this.stack.push(elem);
            this.top++;
        }
    };
    Stack.prototype.pop = function () {
        if (this.top > 0) {
            this.top--;
            return this.stack.pop();
        }
        else {
            throw new Error("No elements to pop");
        }
    };
    Stack.prototype.topElement = function () {
        return this.stack[this.top - 1];
    };
    return Stack;
}());
exports.Stack = Stack;

//# sourceMappingURL=Stack.js.map
