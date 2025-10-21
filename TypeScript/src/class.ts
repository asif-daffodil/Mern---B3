interface PersonInfo {
  getFullName(): string;
}

abstract class Person implements PersonInfo {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected readonly birthYear: number
  ) {}

  public getFullName() : string {
    return `${this.firstName} ${this.lastName}`;
  }

  public abstract getAge(currentYear: number): number;
}

class Student extends Person {
  constructor(
    firstName: string,
    lastName: string,
    birthYear: number,
    private studentId: string
  ) {
    super(firstName, lastName, birthYear);
  }

  public getAge(currentYear: number): number {
    return currentYear - this.birthYear;
  }

  public getDetails(currentYear: number): string {
    return `Name: ${this.getFullName()}, Age: ${this.getAge(currentYear)}, ID: ${this.studentId}`;
  }
}

// ব্যবহার:

const s = new Student("জয়", "কুমার", 2000, "ST1234");
console.log(s.getDetails(2025));
// আউটপুট হবে: “Name: জয় কুমার, Age: 25, ID: ST1234”
