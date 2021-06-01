# Advanced TypeScript patterns

## Installation
```shell
npm install
```

To type-check the whole project:
```shell
npm run validate
```

To run an example in watch mode:
```shell
npm run run-ts module_name
```

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

## 3. Unknown type
TS 3.0 introduces `unknown` type - the type-safe counterpart of `any`.

```typescript
const formatString = (value: unknown) => {
  // ❌ Error because value type is unknown
  // return value.toUpperCase()

  // ✅ OK because we already checked the type here
  if(typeof(value) === "string") {
    return value.toUpperCase()
  }

  // ✅ OK thanks to custom type guard
  if(isNumber(value)) {
    return String(value)
  }
}

const isNumber = (value): value is number => {
  return typeof(value) === "number"
}
```

* [Example](./unknown_type/index.ts)
* Docs: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type