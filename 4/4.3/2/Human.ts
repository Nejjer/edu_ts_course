import { CanFly, CanRun, CanSwim } from "./interfaces";

abstract class Human implements CanSwim, CanRun, CanFly {
  fly() {}

  run() {}

  swim() {}
}
