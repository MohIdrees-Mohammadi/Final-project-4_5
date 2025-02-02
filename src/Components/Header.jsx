import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigation = useNavigate()
  return (
    <header>
      logo

      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/service">
          <li>Services</li>
          </Link>
          <Link to="/contact-us">
          <li>Contact us</li>
          </Link>
          <Link to="/feedback">
          <li>Feedback</li>
          </Link>
        </ul>
      </nav>

      <div className='button-container'>
        <button onClick={ ()=>  navigation("/sign-in")}>Sign in </button>
        <button onClick={ ()=>  navigation("/sign-up")}>Sign up </button>
      </div>
    </header>
  )
}

export default Header
