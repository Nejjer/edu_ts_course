import { CanFly, CanRun, CanSwim } from "./interfaces";

export class Kryptonian implements CanSwim, CanRun, CanFly {
  fly() {}

  run() {}

  swim() {}
}
