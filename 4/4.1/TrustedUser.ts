import { IUser } from "./types";
import { ConfidenceHelper } from "./ConfidenceHelper";

export class TrustedUser {
  private readonly ConfidenceRatio: number;
  constructor(user: IUser) {
    this.ConfidenceRatio = ConfidenceHelper.checkConfidenceRatio(user);
  }

  public getConfidenceRatio() {
    return this.ConfidenceRatio;
  }
}
