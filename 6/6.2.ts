type First<T extends any[]> = T extends [infer R, ...infer _] ? R : never; //   сложна очень сложнаа
type LOL = First<[1, "2"]>;
