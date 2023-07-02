import { Entity } from "./Entity";

export abstract class Component extends Entity {
  public title?: string;
  public caption?: string;
  public fullInfo?: string;
  public name?: string;
  public createDate?: string;
  public updateDate?: string;
  public defaultImgId?: string;
  public images: string[] = [];
  public features?: string;
  public views?: string;
  public likes?: number;
  public dislikes?: number;
  public linkTo?: string;
  constructor(instance?: Partial<Component>) {
    super(instance);
    Object.assign(this, instance);
  }
}
