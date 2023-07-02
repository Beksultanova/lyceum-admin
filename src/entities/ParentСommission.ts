import { Component } from "./Component";

export class ParentСommission extends Component {
  constructor(instance?: Partial<ParentСommission>) {
    super(instance);
    Object.assign(this, instance);
  }
}
