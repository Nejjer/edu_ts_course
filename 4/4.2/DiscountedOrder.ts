import { OrderItem } from "./OrderItem";
import { Product } from "./Product";

export class DiscountedOrder extends OrderItem {
  constructor(
    public readonly discount: number,
    product: Product,
    count: number
  ) {
    super(count, product);
  }
  buy(): void {}

  getCost(): number {
    return this.product.cost * this.discount * this.count;
  }
}
