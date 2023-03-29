type First<T extends any[]> = T extends [infer R, ...infer _] ? R : never; //   сложна сложнаа
type LOL = First<[1, "2"]>;
