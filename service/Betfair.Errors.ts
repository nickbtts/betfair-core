export const BetfairErrors = () => ({
  toArray: () => Object.keys(BetfairErrors().getContext),
  getContext: {
    INVALID_USERNAME_OR_PASSWORD: 'the username or password are invalid',
    ACCOUNT_NOW_LOCKED: 'the account was just locked',
    ACCOUNT_ALREADY_LOCKED: 'the account is already locked',
    PENDING_AUTH: 'pending authentication',
    TELBET_TERMS_CONDITIONS_NA: 'Telbet terms and conditions rejected',
    DUPLICATE_CARDS: 'duplicate cards',
    SECURITY_QUESTION_WRONG_3X:
      'the user has entered wrong the security answer 3 times',
    KYC_SUSPEND: 'KYC suspended',
    SUSPENDED: 'the account is suspended',
    CLOSED: 'the account is closed',
    SELF_EXCLUDED: 'the account has been self-excluded',
    INVALID_CONNECTIVITY_TO_REGULATOR_DK:
      'the DK regulator cannot be accessed due to some internal problems in the system behind or in at regulator; timeout cases included.',
    NOT_AUTHORIZED_BY_REGULATOR_DK:
      "the user identified by the given credentials is not authorized in the DK's jurisdictions due to the regulators' policies. Ex: the user for which this session should be created is not allowed to act(play, bet) in the DK's jurisdiction.",
    INVALID_CONNECTIVITY_TO_REGULATOR_IT:
      'the IT regulator cannot be accessed due to some internal problems in the system behind or in at regulator; timeout cases included.',
    NOT_AUTHORIZED_BY_REGULATOR_IT:
      "the user identified by the given credentials is not authorized in the IT's jurisdictions due to the regulators' policies. Ex: the user for which this session should be created is not allowed to act(play, bet) in the IT's jurisdiction.",
    SECURITY_RESTRICTED_LOCATION:
      'the account is restricted due to security concerns',
    BETTING_RESTRICTED_LOCATION:
      'the account is accessed from a location where betting is restricted',
    TRADING_MASTER: 'Trading Master Account',
    TRADING_MASTER_SUSPENDED: 'Suspended Trading Master Account',
    AGENT_CLIENT_MASTER: 'Agent Client Master',
    AGENT_CLIENT_MASTER_SUSPENDED: 'Suspended Agent Client Master',
    DANISH_AUTHORIZATION_REQUIRED: 'Danish authorization required',
    SPAIN_MIGRATION_REQUIRED: 'Spain migration required',
    DENMARK_MIGRATION_REQUIRED: 'Denmark migration required',
    SPANISH_TERMS_ACCEPTANCE_REQUIRED:
      'The latest Spanish terms and conditions version must be accepted. You must login to the website to accept the new conditions.',
    ITALIAN_CONTRACT_ACCEPTANCE_REQUIRED:
      'The latest Italian contract version must be accepted. You must login to the website to accept the new conditions.',
    CERT_AUTH_REQUIRED:
      'Certificate required or certificate present but could not authenticate with it',
    CHANGE_PASSWORD_REQUIRED: 'Change password required',
    PERSONAL_MESSAGE_REQUIRED: 'Personal message required for the user',
    INTERNATIONAL_TERMS_ACCEPTANCE_REQUIRED:
      'The latest international terms and conditions must be accepted prior to logging in.',
    EMAIL_LOGIN_NOT_ALLOWED:
      'This account has not opted in to log in with the email',
    MULTIPLE_USERS_WITH_SAME_CREDENTIAL:
      'There is more than one account with the same credential',
    ACCOUNT_PENDING_PASSWORD_CHANGE:
      'The account must undergo password recovery to reactivate via https://identitysso.betfair.com/view/recoverpassword',
    TEMPORARY_BAN_TOO_MANY_REQUESTS:
      'The limit for successful login requests per minute has been exceeded. New login attempts will be banned for 20 minutes',
    ITALIAN_PROFILING_ACCEPTANCE_REQUIRED:
      'You must login to the website to accept the new conditions',
    AUTHORIZED_ONLY_FOR_DOMAIN_SE:
      'You are attempting to login to the Betfair Romania domain with a non .ro account.',
    SWEDEN_NATIONAL_IDENTIFIER_REQUIRED:
      'You are attempting to login to the Betfair Swedish domain with a non .se account.',
    SWEDEN_BANK_ID_VERIFICATION_REQUIRED:
      'You must provided your Swedish National identifier via Betfair.se before proceeding.',
    ACTIONS_REQUIRED:
      'You must provided your Swedish bank id via Betfair.se before proceeding.',
    INPUT_VALIDATION_ERROR:
      'There is a problem with the data validity contained within the request. Please check that the request (including headers) is in the correct format.',
  },
})
