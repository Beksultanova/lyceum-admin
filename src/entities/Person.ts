import { Entity } from "./Entity";

export abstract class Person extends Entity {
    public userName?: string;
    public img?: string;
    public description?: string;
    public age?: string;
    public profession?: string;
    public fullInfo?: string;
    public features?: string;

  constructor(instance?: Partial<Person>) {
    super(instance);
    Object.assign(this, instance);
  }
}
