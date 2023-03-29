type MyReadonly<T, K extends keyof T> = K extends any
  ? Readonly<Pick<T, K>> & Omit<T, K>
  : Readonly<T>;

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const todo: MyReadonly<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};
//сделал сам. Было очень интересно
