import { Component } from "./Component";

export class History extends Component {
  public year!: string;
  constructor(instance?: Partial<History>) {
    super(instance);
    Object.assign(this, instance);
  }
}
