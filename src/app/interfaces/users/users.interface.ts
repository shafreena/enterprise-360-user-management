export interface UsersState {
  users: Array<UserType>
}
export interface UserType {
  firstName: string,
  lastName: string,
  age: number,
  email: string
  id: number
}