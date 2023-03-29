import { IUser } from "./types";

export class ConfidenceHelper {
  public static checkConfidenceRatio(user: IUser) {
    return (
      user.countMessages * 2 -
      user.countWarning * 100 +
      ConfidenceHelper.dateDiff(Date.now(), user.registrationDate)
    );
  }
  private static dateDiff(first: number, second: number) {
    //в реальном проекте затащил бы dayjs или его аналог
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }
}
