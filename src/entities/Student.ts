import { Person } from "./Person";

export class Student extends Person {

  constructor(instance?: Partial<Student>) {
    super(instance);
    Object.assign(this, instance);
  }
}
