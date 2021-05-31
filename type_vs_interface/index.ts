// 
// ---------------------------USED INTERCHANGABLY--------------------------
// 
/**
 * Type aliases and interfaces can be used interchangably
 * unless when it comes to Union and Intersection
 */
interface ICar {
  modelName: string
  releasedYear: number
}

type Car = {
  modelName: string
  releasedYear: number
}

type Airplane = {
  modelName: string
  speed: number
}

/** ✅ It is possible to extend an interface AND a type alias */
interface IExtendedVehicle extends ICar, Airplane {}

// 
// ---------------------------EXTEND UNION TYPE----------------------------
// 
type Vehicle = Car | Airplane

/** ✅ It is possible to create an interface by extending a type */
interface IAirplane extends Airplane {}

/** ❌ But it is not possible to extend a union type */
interface IVehicle extends Vehicle {}

/** ❌ Same for class */
class VehicleClass implements Vehicle {}

// 
// --------------------------INTERFACE MERGER--------------------------------
// 
/**
 * ✅ Even though "ICar" was already defined, re-declaring it here will actually extend the interface
 */
interface ICar {
  horsePower: number
}
const mySuperCar: ICar = {modelName: "Lamborghini Huracan", releasedYear: 2020, horsePower: 800}

/** ❌ But type aliases could not be merged */
type Car = {
  horsePower: number
}