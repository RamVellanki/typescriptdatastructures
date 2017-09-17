export interface IStack {
    push(number): void;
    pop(): number;
    topElement(): number;
}