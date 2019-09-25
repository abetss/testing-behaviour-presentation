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


// Similarly does verifying Login is calling <LastLogins /> with the expected props,
// testing implementation or behaviour?
// Does verifying the number `<span>{lastLogin}</span>` we would see given a list of
// lastLogins gives us or more confidence?
// Or do we get the most confidence to verify SignInScene renders the expected number of
// `<span>{lastLogin}</span>` given a list of lastLogins and props.showSiteSignIn: true