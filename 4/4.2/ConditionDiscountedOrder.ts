import { OrderItem } from "./OrderItem";
import { Product } from "./Product";

export class ConditionDiscountedOrder extends OrderItem {
  constructor(
    public readonly discount: number,
    public readonly countForDiscount: number,
    product: Product,
    count: number
  ) {
    super(count, product);
  }

  buy(): void {}

  getCost(): number {
    const productConst =
      this.count >= this.countForDiscount
        ? this.product.cost * this.discount
        : this.product.cost;
    return productConst * this.count;
  }
}
