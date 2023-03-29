import { OrderItem } from "./OrderItem";
import { Product } from "./Product";

export class OrderWithTransportationCosts extends OrderItem {
  constructor(
    public readonly transportationCosts: number,
    product: Product,
    count: number
  ) {
    super(count, product);
  }
  buy(): void {}

  getCost(): number {
    return (this.product.cost + this.transportationCosts) * this.count;
  }
}
