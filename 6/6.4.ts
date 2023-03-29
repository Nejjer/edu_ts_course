type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};
//вау эффект от того, что можно делать рекурсивно!
