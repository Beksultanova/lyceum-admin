import { Component } from "./Component";

export  class News extends Component {

  constructor(instance?: Partial<News>) {
    super(instance);
    Object.assign(this, instance);
  }
}
