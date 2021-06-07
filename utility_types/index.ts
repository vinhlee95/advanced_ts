
// 
// -----------------Return type consists of the return type of function----------------
// 
type FunctionReturnStringType = ReturnType<() => string>

const formatStringFn = (value: any): FunctionReturnStringType => {
  return 'foo'
}

// 
// -------------------Required type---------------------
// 
interface Props {
  id: number
  name?: string
}

const props1: Props = {id: 1}
const props2: Required<Props> = {id: 1, name: 'foo'} // both id and name are required here


// 
// ------------------Readonly<>----------------------
// 
props1.id = 2 // modifying id of the props1 object
const immutableProp: Readonly<Props> = {id: 3}
immutableProp.id = 4 // ❌

// 
// --------------------Pick<>---------------------------
//
interface ElectricCar {
  name: string
  brand: string
  batteryRange: number
}
const telsaModelS: ElectricCar = {name: 'ModelS', brand: 'Tesla', batteryRange: 500}

type DieselCar = Pick<ElectricCar, 'name' | 'brand'> 
const hondaCivic: DieselCar = {name: 'Civic', brand: 'Honda'}


// Omit <>
type NonElectricCar = Omit<ElectricCar, 'batteryRange'>