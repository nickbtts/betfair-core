const CPUNode = process.env

export const ENVSentry = () => ({
  dsn: CPUNode['DSN_CONNECT'],
})

export const ENVBetfair = () => ({
  cert: CPUNode['CERT_PASSPHRASE'],
  username: CPUNode['USER_USERNAME'],
  password: CPUNode['USER_PASSWORD'],
})
