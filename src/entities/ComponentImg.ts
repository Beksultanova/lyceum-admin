import { Entity } from "./Entity";

export abstract class ComponentImg extends Entity {
    public componentId!: number;
    public imgId!: number;

  constructor(instance?: Partial<ComponentImg>) {
    super(instance);
    Object.assign(this, instance);
  }
}
