function Chat (props) {
  return (
    <div className='frame'>
      <h1 className='frame__title'>UserImail</h1>
      <div className='frame__content'>
        <div className='chat'>
          <div className='chat__wrapper'>
            <p>[UserImail~]</p>
            <p className='chat__exit'>[Exit~]</p>
          </div>
          <form className='chat__form'>
            <input className="chat__input" 
              type="text" 
              minLength="1" 
              maxLength="180" 
              placeholder="text" 
              required
            />
            <button className='chat__btn-submit' type='submit'>enter</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chat;