// missing semicolon delimiter
interface Foo {
  name: string
  greet(): string
}

// using incorrect delimiter
interface Bar {
  name: string,
  greet(): string,
}

// missing last member delimiter
interface Baz {
  name: string;
  greet(): string
}

// incorrect delimiter
type FooBar = { name: string, greet(): string }

// last member should not have delimiter
type FooBar = { name: string; greet(): string; }
