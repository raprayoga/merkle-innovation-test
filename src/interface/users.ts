export interface UsersResponse {
  id: string
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
  data: UsersResponse[]
  error?: null | UsersResponse
  page: number
  totalPage: number
  form: UsersPayload
}

export interface UsersPayload {
  sort?: string
  page?: string
}
