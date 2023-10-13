import http from './baseService'
import { UsersResponse, UsersPayload } from '@/interface/users'

export const users = async (
  payload: UsersPayload
): Promise<UsersResponse[]> => {
  const { data } = await http.get('users', {
    params: payload,
  })
  return data
}

export const deleteUser = async (id: string): Promise<UsersResponse> => {
  return await http.delete(`users/${id}`)
}
