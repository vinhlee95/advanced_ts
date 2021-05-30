/**
 * Using discriminate union in TypeScript
 * Docs: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
 * The `never` type: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type
 */

// 
// -------------------NAIVE----------------------
// 

/**
 * Shape interface
 * Objects using this type could be either "circle" with "radius"
 * or "square" with "sideLength"
 * 
 */
interface Shape {
  kind: "circle" | "square"
  radius?: number
  sideLength?: number
}

/**
 * Check "kind" of shape to calculate its area size
 * 
 * @param shape 
 */
const calculateArea = (shape: Shape) => {
  // Oops
  if(shape.kind === "circle") {
    // !!! radius is optional => could be undefined
    // return Math.PI * shape.radius ** 2

    // Force TS to work by using non-null assertion (!) -> say that "radius" always present
    // But the truth is that it might not be always true
    return Math.PI * shape.radius! ** 2
  }
}


// 
// -------------------DISCRIMINATE UNIONS----------------------
// 
/**
 * Specific interface for "circle" objects
 * This is much better that "Shape" because "radius" is mandatory
 */
interface Cycle {
  kind: "circle"
  radius: number
}

/**
 * Specific interface for "square" objects
 * This is much better that "Shape" because "sideLength" is mandatory
 */
interface Square {
  kind: "square"
  sideLength: number
}

// Should better named "Shape" but just to make it different than already defined Shape ^
type IShape = Cycle | Square

const calArea = (shape: IShape) => {
  if(shape.kind == "circle") {
    // shape object now has "Cycle" type
    return Math.PI * shape.radius ** 2
  }

  // shape object now has "Square" type
  return shape.sideLength ** 2
}

// 
// --------------------EXHAUSTIVENESS CHECKING WITH "never" TYPE-------------
// 
interface Triangle {
  kind: "triangle"
  sideLength: number
}

type AllShape = Cycle | Square | Triangle

const getArea = (shape: AllShape) => {
  switch(shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2
    case "square":
      return shape.sideLength ** 2
    // By commented this "new" shape kind bellow
    // TS will throw an error in the default case, because we use "never" type to do exhaustive checking
    case "triangle":
      return "I don't know how to calculate this lol"
    default:
      // Use "never" type to do a compile check to make sure that 
      // we have handled all case
      // I.e. exhaustive checking
      const _exhaustiveCheck: never = shape
      return _exhaustiveCheck
  }
}
