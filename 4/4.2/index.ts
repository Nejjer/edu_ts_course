import { OrderItem } from "./OrderItem";
import { DiscountedOrder } from "./DiscountedOrder";
import { Product } from "./Product";
import { ConditionDiscountedOrder } from "./ConditionDiscountedOrder";
import { OrderWithTransportationCosts } from "./OrderWithTransportationCosts";

const orders: OrderItem[] = [
  new DiscountedOrder(50, new Product("pelmeni", 100), 2),
  new DiscountedOrder(50, new Product("wine", 250), 20),
  new ConditionDiscountedOrder(20, 50, new Product("voda", 10), 20),
  new ConditionDiscountedOrder(15, 12, new Product("brain", 1000000), 1),
  new OrderWithTransportationCosts(1000, new Product("car", 10), 1),
  new OrderWithTransportationCosts(1, new Product("biser", 1), 1000),
];

orders.forEach((order) => order.log());
orders.sort((_1, _2) => _1.compare(_2));
orders.forEach((order) => order.log());
