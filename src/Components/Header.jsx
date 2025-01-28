import React from 'react'

const Header = () => {
  return (
    <header>
      logo 
      
      <nav>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact us</li>
          <li>Feedback</li>
        </ul>
      </nav>

      <div className='button-container'>
        <button>Sign in </button>
        <button>Sign up </button>
      </div>
    </header>
  )
}

export default Header
