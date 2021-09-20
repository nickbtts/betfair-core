import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'
import * as Environment from '@App/Environment'

Sentry.init({
  dsn: Environment.ENVSentry().dsn,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})
