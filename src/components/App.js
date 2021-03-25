function App() {
  return (
    <div className='sign-up'>
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
      </div>
    </div>
  );
}

export default App;
