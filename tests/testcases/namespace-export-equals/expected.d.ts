declare const foo$1: {};
declare namespace Bar {
  export import foo = foo$1;
}
declare namespace Baz {
  export import foo = foo$1;
}
export { Bar, Baz };
