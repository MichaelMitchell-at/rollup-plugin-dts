import * as Foo from "./foo";

export declare namespace Bar {
  export var foo: typeof Foo.foo;
}

export declare namespace Baz {
  export import foo = Foo.foo;
}
