const applicationConfig = {
  clientID: '{Web App Application Id}',
  authority: 'https://login.microsoftonline.com/tfp/{Directory Domain}/{Sign-up Or Sign-in Policy}/v2.0/.well-known/openid-configuration',
  scopes: ['openid', '{API App Id URI}/user_impersonation'],
  apiBaseUrl: 'https://localhost:44390/api/'
}

export default applicationConfig
