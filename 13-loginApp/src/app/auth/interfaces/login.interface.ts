export interface Error {
  error: boolean,
  text: string,
}

export interface LoginError {
  email: Error,
  password: Error,
  message: Error
}
