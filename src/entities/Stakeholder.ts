import { Component } from "./Component";

export class Stakeholder extends Component {

  constructor(instance?: Partial<Stakeholder>) {
    super(instance);
    Object.assign(this, instance);
  }
}
