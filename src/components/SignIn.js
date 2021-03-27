function SignIn() {
  return (
    <div className='sign-up'>
      <h1 className='sign-up__title'>Login</h1>
      <div className='sign-up__content'>
        <form>
          <p className='sign-up__text'>
            <span className='sign-up__text-extra'>login as</span>:USER_EMAIL=
            <input className="sign-up__input" 
              type="email" 
              minLength="5" 
              maxLength="40" 
              placeholder="Email" 
              required
            />          
          </p>
          <p className='sign-up__text'>
            <span className='sign-up__text-extra'>Password</span>:PASSWORD=
            <input className="sign-up__input" 
                type="password" 
                minLength="5" 
                maxLength="40" 
                placeholder="Password"
                required
              />
          </p>
          <p className='sign-up__text'>
            <span className='sign-up__text-extra'>[confirm@button]$</span>
            <button className='sign-up__submit' type='submit'>enter</button>
          </p>
        </form>
        <p className='sign-up__text'>Don't have an account?
          <span className='link'>Sign Up</span>
        </p>
      </div>
    </div>
  )
}

export default SignIn;