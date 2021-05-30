class Person {
  default_hobbies: string[] = ["Coding"]
  // required_jobs: string // TS error because of strictPropertyInitialization flag on
  // 1 way to fix it is to use "definite assignment assertion", like following:
  required_jobs!: string // No error!

  constructor(hobbies: string[]) {
    this.default_hobbies = hobbies
  }
}

const programmer = new Person(["Surf r/programmerhumour"])
programmer.default_hobbies.forEach(console.log)