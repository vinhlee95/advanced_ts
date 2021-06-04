/**
 * SomeType extends OtherType ? TrueType : FalseType;
 * 
 */

// 
// -----------------------FUNCTION TYPE OVERLOADS--------------------------
// 

 interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

/**
 * Overloads for createLabel
 * They all describe 1 single JS function that makes a choice based on the types of the input
 * 🚧🚧🚧 Downside is that we need to create more overloads if we want to have more conditions for the input type
 */
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

const overloadLabel = createLabel(12) // should have IdLabel type because typeof(12) === "number"


// 
// ---------------------CONDITIONAL TYPE----------------------------
// 
type NameOrId<T> = T extends number ? IdLabel : NameLabel

function createLabelWithConditionalType<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented"
}

const conditionalTypedLabel = createLabelWithConditionalType(12) // should have IdLabel type because typeof(12) === "number"


// 
// -----------------------MAPPED TYPES WITH CONDITIONAL TYPES------------------
// 
type UserType = {
  name: string
  email: string | null
}

type NonNullableType<Type> = {
  [K in keyof Type]: Type[K] extends null ? number : Type[K] 
}[keyof Type]

type NonNullableUserType = NonNullableType<UserType>


// 
// --------------------FILTERING TYPES WITH CONDITIONAL & "never"---------------------------
// More examples from the docs:
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types
// 

/**
 * Filtering property names represeting a function
 * 
 */
type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T]


/**
 * Filtering property names not represeting a function
 * 
 */
type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T]

type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>

interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}

type FunctionPropertyName = FunctionPropertyNames<Part> // "updatePart" 
type NonFunctionPropertyName = NonFunctionPropertyNames<Part> // "id" | "name" | "subparts"
type NonFunctionProperty = NonFunctionProperties<Part> // { id: number, name: string, subparts: Part[] }

// 
// ------------------------------EXTRACT & EXCLUDE-------------------------------------------
//

/**
 * Example of extracting only string and boolean type
 */
type AllTypes = string | boolean | never | object
type OnlyStringAndBoolean = Extract<AllTypes, string | boolean> // string | boolean

/**
 * Example of excluding never type
 */
type NotNeverType = Exclude<AllTypes, never>
