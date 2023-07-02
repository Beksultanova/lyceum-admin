import { Component } from "./Component";

export class Question extends Component {
  public question!: string;
  public answer!: string;

  constructor(instance?: Partial<Question>) {
    super(instance);
    Object.assign(this, instance);
  }
}
