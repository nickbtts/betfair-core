import '@Config/DotEnv'
import '@App/Environment'
import '@App/Sentry'
import * as Betfair from '@Service/Betfair'

Betfair.BetfairLogin({ interactive: true })
