import { AxiosResponse } from 'axios'

export interface AxiosLoginStatus extends AxiosResponse {
  data: {
    loginStatus?: string
    status?: string
    error?: string
  }
}

export type CreateDeveloperAppKeys = {
  appName: string
}

export type BetfairLoginConfig = {
  interactive?: boolean
  virtualNetwork?: boolean
}
