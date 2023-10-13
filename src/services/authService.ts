import { LoginInputForm, LoginResponse } from '@/interface/auth'
import http from './baseService'

export const loginUser = async (
  payload: LoginInputForm
): Promise<LoginResponse> => {
  const { data } = await http.post('auth/login', payload)
  return data
}
