export interface UserData extends UserInputPayload {
  id: string
}

export interface UserInputPayload {
  email: string
  username: string
  password: string
  name: Name
  phone: string
  address: Address
}

interface Name {
  firstname: string
  lastname: string
}

interface Address {
  city: string
  street: string
  number: string
  zipcode: string
  geolocation: Geo
}

interface Geo {
  lat: string
  long: string
}

export interface UsersSliceState {
  loading: boolean
  data: UserData[]
  error?: null | UserData
  page: number
  totalPage: number
  form: UsersPayload
}

export interface UsersPayload {
  sort?: string
  page?: string
}

export interface UserInputForm {
  email: string
  username: string
  password: string
  phone: string
  firstname: string
  lastname: string
  city: string
  street: string
  number: string
  zipcode: string
  lat: string
  long: string
}
