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
