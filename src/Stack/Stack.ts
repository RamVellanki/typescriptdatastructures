import { IStack } from "./IStack";

export class Stack implements IStack {
    private stack: Array<number>;
    private top: number;
    constructor() {
        this.top = 0;
        this.stack = new Array<number>();
    }
    push(elem: number): void {
        if (elem != null || elem != undefined) {
            this.stack.push(elem);
            this.top++;
        }
    }
    pop(): number {
        if (this.top > 0) {
            this.top--;
            return this.stack.pop();
        } else {
            throw new Error("No elements to pop")
        }
    }
    topElement(): number {
        return this.stack[this.top-1];
    }
}