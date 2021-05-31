# Advanced TypeScript patterns

## 1. Discriminate union
```typescript
interface Foo {
  kind: "foo"
  foo: string
}

interface Bar {
  kind: "bar"
  bar: string
}

type FooBar = Foo | Bar
```
* [Example](./discriminate_union/discriminate_unions.ts)
* Docs: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
* The `never` type: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type

## 2. Mapped types
```typescript
interface Foo {
  kind: "foo"
  foo?: string
}

type ConcreteReadonlyFoo = {
  readonly [K in keyof Foo]-?: Foo[K]
}
```

* [Example](./mapped_types/index.ts)
* Docs: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html