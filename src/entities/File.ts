import { Entity } from "./Entity";

export abstract class File extends Entity {
    public byte!: string;
    public name!: string;
    public expansion!: string;
    public file!: string;

  constructor(instance?: Partial<File>) {
    super(instance);
    Object.assign(this, instance);
  }
}
