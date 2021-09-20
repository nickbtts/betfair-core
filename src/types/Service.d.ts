import { AxiosResponse } from 'axios'

export interface AxiosLoginStatus extends AxiosResponse {
  data: {
    loginStatus: string
  }
}

export type CreateDeveloperAppKeys = {
  appName: string
}
