import { Component } from "./Component";

export class Profession extends Component {
  public numOfHours!: number;
  public numOfStudents!: number;

  constructor(instance?: Partial<Profession>) {
    super(instance);
    Object.assign(this, instance);
  }
}
