import { Component } from "./Component";

export class Achievement extends Component {
  constructor(instance?: Partial<Achievement>) {
    super(instance);
    Object.assign(this, instance);
  }
}
