const Login = {username, password, lastLogins, onUserNameChange, onPasswordChange}(
  <div>
    <Header title="Login" />
    <LoginBox>
      <InputText value={username} onChange={onUserNameChange} />
      <InputText value={password} type="password" onChange={onPasswordChange} />
    </LoginBox>
    <LastLogins lastLogins={lastLogins} />
  </div>
)




























const SignInScene = props => (
  <div>
    {props.isAuthenticationInProgress && <Loading />}
    {!props.showGoogleSignIn && <GoogleSignIn />}
    {!props.showSiteSignIn && <Login />}
  </div>
)