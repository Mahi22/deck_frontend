class Auth {

  /**
   * @static authenticateUser - Authenticate a user. Save a token string in localStorage
   *
   * @param  {string} token
   */
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  /**
   * @static isUserAuthenticated - Check if a user is authenticated - check if a token is saved
   *  in localStorage
   * @return {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  /**
   * @static deauthenticateUser - Deaunthenticate a user. Remove a token from Local Storage
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  static getToken() {
    return localStorage.getItem('token');
  }
}

export default Auth;
