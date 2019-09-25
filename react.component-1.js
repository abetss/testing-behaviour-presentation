const Login = {username, password, lastLogins, onUserNameChange, onPasswordChange}(
  <div>
    <h1>Login</h1>
    <div className="login-form">
      <div className="input-group">
        <label>Username</label>
        <input type="text" onChange={onUserNameChange} value={username}></input>
      </div>
      <div className="input-group" data-test="login-username">
        <label>password</label>
        <input type="password" onChange={onPasswordChange} value={password}></input>
      </div>
    </div>
    <div className="last-logins">
      {lastLogins.map(lastLogin => (
        <span>{lastLogin}</span>
      ))}
    </div>
  </div>
)




const SignInScene = props => (
  <div>
    {props.isAuthenticationInProgress && <Loading />}
    {!props.showGoogleSignIn && <GoogleSignIn />}
    {!props.showSiteSignIn && <Login />}
  </div>
)


// does verifying SignInScene calls <Login /> with the expected props when showSiteSignIn
// testing implementation or behaviour? Does it give us the most confidence.

