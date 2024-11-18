import type { LoginResult } from '../types/member'
import { http } from '../utils/http'

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
type simpleLoginParams = {
  phoneNumber: string
}
/**
 * 小程序登录
 * @param data 请求参数
 */
export const postLoginWxMinAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}
export const postSimpleLoginWxMinAPI = (data: simpleLoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data,
  })
}
