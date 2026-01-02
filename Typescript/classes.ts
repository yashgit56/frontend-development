class Employee {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public setName = (name: string): void => {
    console.log(this);
    this.name = name;
  };

  public getName = (): string => {
    console.log(this);
    return this.name;
  };
}

const employee = new Employee("Yash");
// console.log(employee, " ", employee.getName());
employee.setName("Aryan");
// console.log(employee, " ", employee.getName());

// Members: Visibility
// Class members can also be given special modifiers that affect visibility.

// inheritance implements 

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}


abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle2 extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
