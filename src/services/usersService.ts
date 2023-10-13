import http from './baseService'
import { UserData, UserInputPayload, UsersPayload } from '@/interface/users'

export const users = async (payload: UsersPayload): Promise<UserData[]> => {
  const { data } = await http.get('users', {
    params: payload,
  })
  return data
}

export const deleteUser = async (id: string): Promise<UserData> => {
  return await http.delete(`users/${id}`)
}

export const addUsers = async (
  payload: UserInputPayload
): Promise<UserData> => {
  const { data } = await http.post('users', payload)
  return data
}
