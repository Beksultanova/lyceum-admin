import { File } from "./File";

export  class Img extends File {
  public width!: string;
  public height!: string;
  public alt!: string;

  constructor(instance?: Partial<Img>) {
    super(instance);
    Object.assign(this, instance);
  }
}
