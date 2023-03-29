export class Product {
  private _cost: number;
  private _name: string;

  constructor(name: string, cost: number) {
    this.cost = cost;
    this.name = name;
  }

  get cost() {
    return this._cost;
  }
  set cost(newCost: number) {
    this._cost = newCost;
  }

  get name() {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  public log() {
    console.log(`${this.name};${this.cost}`);
  }
}
