export interface AuthResponse {
  ok: boolean,
  uid?: string,
  name?: string,
  email?: string;
  token?: string,
  msg?: string,
  errors?: Error
}
interface Error {
 email?: ErrorInfo,
 password?: ErrorInfo,
 msg?: string
}

interface ErrorInfo {
  value?: string,
  msg?: string,
  param?: string,
  location?: string,
}
