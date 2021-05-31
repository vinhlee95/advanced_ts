/**
 * Docs: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 */
// 
// ----------------------BASIC EXAMPLE-------------------------
// 
interface Phone {
  modelName: string
  storage: number
  releasedYear: number
}

/**
 * ReadonlyPhone type
 * Created based on Phone interface but make all keys readonly
 */
type ReadonlyPhone = {
  readonly [K in keyof Phone]: Phone[K]
}

const myReadonlyPhone: ReadonlyPhone = {
  modelName: "iPhone 11 Pro Max",
  storage: 256,
  releasedYear: 2019
}
// ❌ Cannot reassign a new value for "releaseYear" key
// because it is readonly
myReadonlyPhone.releasedYear = 2020

// 
// --------------------REUSABLE MAPPED TYPES-----------------------
// 
type ReadonlyFlags<Type> = {
  readonly [K in keyof Type]: Type[K]
}

type ReadonlyPhoneType = ReadonlyFlags<Phone>

// 
// --------------------MAPPING MODIFIER---------------------------
//
/**
 * Use "-" prefix to remove "readonly" modifier from the original type
 * 
 */
type CreateMutable<Type> = {
  -readonly [K in keyof Type]: Type[K]
}
type MutablePhoneType = CreateMutable<ReadonlyPhoneType>

/**
 * Use "-" to remove optional flag in keys of a type
 * 
 */
type RemoveOptional<Type> = {
  [K in keyof Type]-?: Type[K]
}
type FloppyPhoneType = {
  [K in keyof Phone]?: Phone[K]
}
type ConcretePhoneType = RemoveOptional<FloppyPhoneType>


// 
// ------------------------KEY REMAPPING----------------------------
// 
type MappedTypePhone = {
  [K in keyof Phone as "foo"]: Phone[K]
}

/**
 * Getter type creation using template literal types:
 * https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
 * 
 */
type Getter<Type> = {
  [K in keyof Type as `get${Capitalize<string & K>}`]: () => Type[K]
}
type PhoneGetter = Getter<Phone>

/**
 * Remove type field
 * 
 */
type RemoveField<Type, Field> = {
  [K in keyof Type as Exclude<K, Field>]: Type[K]
}
type PhoneWithoutStorage = RemoveField<Phone, "storage">
type PhoneWithoutModelName = RemoveField<Phone, "modelName">