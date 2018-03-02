# Vue SPA with Azure AD B2C Login and DotNetCore Api Boilerpalte

> A project boilerplate for a Single Page Application in Vue JS calling an API in DotNetCore and authenticated with Azure AD B2C. The web app was generated using the [vue-cli](https://vuejs.org/v2/guide/installation.html#CLI) tool.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```

## Azure AD B2C Setup

1. [Create an Azure Active Directory B2C tenant](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-get-started) - take note of your directory domain. This will have the format of {domain}.onmicrosoft.com
2. [Register your web API](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-app-registration#register-a-web-api) - take note of the Application Id and App ID URI.
3. [Register your web application](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-app-registration#register-a-web-app) - take note of the Application Id (Client Id)
4. [Add Api Access to your web app](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-app-registration#create-a-web-app-client-secret) - Skip step 1 as we are not using a client secret in this application. Instead, we use the access token to connect to our API.
5. [Create a sign-up or sign-in policy](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-reference-policies#create-a-sign-up-or-sign-in-policy)

## Fill up applicationConfig

Go to the file application.config.js. Replace the appropriate placeholders under the applicationConfig object with the values derived from your Azure B2C applications.

```javascript
const applicationConfig = {
  clientID: '{Web App Application Id}',
  authority: 'https://login.microsoftonline.com/tfp/{Directory Domain}/{Sign-up Or Sign-in Policy}/v2.0/.well-known/openid-configuration',
  scopes: ['openid', '{API App Id URI}/user_impersonation']
}
```

## Fill up API AzureAdB2C settings

Go to appsettings.json in the API project and replace the appropriate placeholders

```JSON
"AzureAdB2C": {
    "Instance": "https://login.microsoftonline.com/tfp/",
    "ClientId": "{API Application Id}",
    "Domain": "{Directory Domain}",
    "SignUpSignInPolicyId": "{Sign-up Or Sign-in Policy}"
  }
```
