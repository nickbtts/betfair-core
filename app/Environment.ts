import * as Path from 'path'
import * as DotEnv from 'dotenv'

/**
 * Defines that the project will use the './environment'
 * file from 'dotenv' globally
 */
DotEnv.config({
  path: Path.resolve(__dirname, '../.env'),
  encoding: 'UTF-8',
})

const CPUNode = process.env

export const ENVSentry = () => ({
  dsn: CPUNode['DSN_CONNECT'],
})

export const ENVBetfair = () => ({
  cert: CPUNode['CERT_PASSPHRASE'],
  username: CPUNode['USER_USERNAME'],
  password: CPUNode['USER_PASSWORD'],
})
