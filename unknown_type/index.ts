/**
 * Unknown is the type-safe counterpart of Any
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type
 */
const formatString = (value: unknown) => {
  // ❌ Error because value type is unknown
  // return value.toUpperCase()

  // ✅ OK because we already checked the type here
  if(typeof(value) === "string") {
    return value.toUpperCase()
  }

  if(typeof(value) === "function") {
    return value()
  }

  // ✅ OK thanks to custom type guard
  if(isNumber(value)) {
    return String(value)
  }
}

const isNumber = (value): value is number => {
  return typeof(value) === "number"
}

// 
// -------------TYPE ASSERTIONS--------------
// 
const value: unknown = "Hello world"

// ❌ Error because unknown is not assignable to string type
const stringValue: string = value

// ✅ OK because of type assertions
const validStringValue: string = value as string

// ❌ Explode because of endless optimism
const fakeStringValue: unknown = 12
const superValidString: string = fakeStringValue as string // 💣💣💣
superValidString.toUpperCase() // 💥💥💥

// 
// -------------------EXAMPLE: GETTING VALUE FROM LOCAL STORAGE-----------------------
// 
/**
 * Inspired from: https://mariusschulz.com/blog/the-unknown-type-in-typescript
 * 
 */
type Result = {success: boolean, data: unknown} | {success: false, error: Error}

const getValueFromLocalStorage = (key: string): Result => {
  const item = localStorage.getItem(key)
  if(item === null) {
    return {
      success: false,
      error: new Error(`Item with key ${key} does not exist.`)
    }
  }

  try {
    const value = JSON.parse(item)
    return {
      success: true,
      data: value
    }
  } catch(error) {
    return {
      success: false,
      error
    }
  }
}

const darkModeResult = getValueFromLocalStorage("darkMode")
if(darkModeResult.success === false) {
  console.log("No darkmode config saved in localStorage.")
} else {
  const value = darkModeResult.data
  if(typeof(value) === "boolean") {
    console.log("Darkmode is set on in localStorage.")
  }
}
