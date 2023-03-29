import { IUser } from "./types";
import { TrustedUser } from "./TrustedUser";

const users: IUser[] = [];

console.log(
  users.filter((user) => new TrustedUser(user).getConfidenceRatio() >= 0)
);
