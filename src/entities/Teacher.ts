import { Person } from "./Person";

export class Teacher extends Person {
 public facebook!: string;
 public whatsApp!: string;
 public instagram!: string;
  constructor(instance?: Partial<Teacher>) {
    super(instance);
    Object.assign(this, instance);
  }
}
