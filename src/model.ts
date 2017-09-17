/**
 * Person
 */
export interface Printable {
    print(): void;
}
export class Person implements Printable {
    firstName: string;
    lastName: string;

    constructor(fName: string, lName: string) {
        this.firstName = fName;
        this.lastName = lName;
    };

    hello(): string {
        return "Hello" + this.firstName + " " + this.lastName;
    };

    print(): void {
        console.log("Hello " + this.firstName + " " + this.lastName)
    }
};

export class Developer extends Person {
    salary: number;

    constructor(fName: string, lName: string, sal: number) {
        super(fName, lName);
        this.salary = sal;
    }

    print(): void {
        console.log("Hello " + this.firstName + " " + this.lastName + ", your salary " + this.salary);
    }

    getSal(): number {
        return this.salary;
    }
}

var d: Developer = new Developer("Ram", "Vellanki", 100000);
d.print();