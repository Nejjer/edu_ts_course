import { Product } from "./Product";

export abstract class OrderItem {
  protected constructor(
    public readonly count: number,
    public readonly product: Product
  ) {}

  public abstract buy(): void;
  abstract getCost(): number;

  public compare(other: OrderItem): number {
    return this.product.name.localeCompare(other.product.name);
  }
  public log() {
    this.product.log();
  }
}
