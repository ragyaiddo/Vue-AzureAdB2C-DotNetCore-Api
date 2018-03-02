import * as Msal from 'msal'
import applicationConfig from './application.config'

const authService = {
  clientApplication () {
    return new Msal.UserAgentApplication(
      applicationConfig.clientID,
      applicationConfig.authority,
      function (errorDesc, token, error, tokenType) {
        // This function is called after loginRedirect and acquireTokenRedirect. Not called with loginPopup
        // msal object is bound to the window object after the constructor is called.
        if (token) {
          console.log(token)
        } else {
          console.log(error + ':' + errorDesc)
        }
      })
  },
  login () {
    return this.clientApplication().loginPopup(applicationConfig.scopes)
  },
  parseJwt (token) {
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
  },
  logout () {
    // Removes all sessions, need to call AAD endpoint to do full logout
    this.clientApplication().logout()
  },
  logMessage (s) {
    document.body.querySelector('.response').appendChild(document.createTextNode('\n' + s))
  }
}

export { authService, applicationConfig }
