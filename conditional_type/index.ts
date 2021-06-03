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
}

type NonNullableUserType = NonNullableType<UserType>

const myUser: NonNullableUserType = {name: "foo", email: "foo"}

