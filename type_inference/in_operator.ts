interface Admin {
  role: string
}

interface User {
  email: string
}

const redirectUser = (user: User | Admin) => {
  // 🚧 TS will caught the error here because property "role" does not exist in type "User"
  // if(user.role === "foo") {
  //   console.log("Redirect user with role foo")
  //   return
  // }

  // ✅ Use JavaScript "in" operator
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
  // if("role" in user) {
  //   console.log("Redirect user with role", user.role)
  //   return
  // }

  // ✅ Custom typeguard also work
  if(isAdmin(user)) {
    console.log("Redirect user with role", user.role)
    return
  }

  console.log("Redirect Admin", user.email)
}

/**
 * Custom type guard to check if an user is an admin
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-6.html#user-defined-type-guard-functions
 * 
 */
const isAdmin = (user: Admin | User): user is Admin => {
  return (<Admin>user).role !== undefined
}