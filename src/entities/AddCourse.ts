import { Component } from "./Component";

export  class AddCourse extends Component {
  public courseDuration!: string;

  constructor(instance?: Partial<AddCourse>) {
    super(instance);
    Object.assign(this, instance);
  }
}
 