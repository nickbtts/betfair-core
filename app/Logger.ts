import { LoggerProps } from '@Type/App'

export const Logger = ({ error }: LoggerProps) => ({
  error: (message: string) => new Error(error ?? message),
})
