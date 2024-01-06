type Foo<T=true> = T
type Foo<T,K> = T

interface Log {
  foo <T>(name: T): void
}