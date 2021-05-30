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
* [Example](./type_inference/du_redux.ts)
* Docs: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
* The `never` type: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type