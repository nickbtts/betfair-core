import Axios, { AxiosRequestConfig } from 'axios'
import * as Https from 'https'
import * as FileSystem from 'fs'
import * as OperatingSystem from 'os'
import * as Path from 'path'
import * as Environment from '@App/Environment'
import * as Sentry from '@App/Sentry'
import * as Logger from '@App/Logger'
import { BetfairErrors } from '@Service/Betfair.Errors'
import { AxiosLoginStatus, CreateDeveloperAppKeys } from '@Type/Service'

const logger = Logger.Logging({})

const transaction = Sentry.Context.startTransaction({
  op: 'service/betfair',
  name: 'Betfair Service',
  description: 'Manages the connection service with betfair',
})

const certdir = OperatingSystem.homedir().concat('/.certs')

const betfairRoutes = {
  appKeys: 'https://www.betfair.com/api/create/appkeys/',
}

/**
 * With an httpsagent it is possible to connect
 * to betfair via a non-interactive login, this way
 * security is preserved and it is not necessary
 * to open a new window to authenticate
 */
const nodeHttpsAgent = new Https.Agent({
  rejectUnauthorized: false, // this will disable client verification
  cert: FileSystem.readFileSync(Path.resolve(certdir, 'betfair-2048.crt')),
  key: FileSystem.readFileSync(Path.resolve(certdir, 'betfair-2048.key')),
  passphrase: Environment.ENVBetfair().cert,
})

/**
 * Config responsible for authenticating to the
 * service and returning methods for handling requests
 */
const betfairLoginConfig: AxiosRequestConfig = {
  headers: {
    'X-Application': 'SomeKey',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  params: {
    username: Environment.ENVBetfair().username,
    password: Environment.ENVBetfair().password,
  },
  withCredentials: true,
  baseURL: 'https://identitysso-cert.betfair.com/',
  httpsAgent: nodeHttpsAgent,
}

const betfair = Axios.create(betfairLoginConfig)
const account = Axios.create()

/**
 * This function should be used to login to betfair and after
 * that, everything should work without problems. The parameter
 * is a goal and the 'interactive' setting is a toggler to choose
 * the login mode, The parameter is a goal and 'interactive'
 * configuration is a toggler to select the login mode.
 */
export const BetfairLogin = async () => {
  try {
    const login = await betfair.post<any, AxiosLoginStatus>('api/certlogin')
    const type = login.data['loginStatus']
    const message = BetfairErrors().getContext[type]

    if (BetfairErrors().toArray().includes(type)) {
      logger.error(login.data['loginStatus'])
      throw new Error(message)
    }
  } catch (error) {
    logger.error(error)
    Sentry.Context.captureException(error)
  } finally {
    transaction.finish()
  }
}

/**
 * The main function to handle 'betfair' services,
 * all methods are similar to the official playground
 */
export const Betfair = () => ({
  Account: {
    createDeveloperAppKeys: ({ appName }: CreateDeveloperAppKeys) => ({
      connect: () => account.get(betfairRoutes.appKeys.concat(appName)),
    }),
    getDeveloperAppKeys: () => ({
      connect: () => account.get(betfairRoutes.appKeys),
    }),
  },
})
