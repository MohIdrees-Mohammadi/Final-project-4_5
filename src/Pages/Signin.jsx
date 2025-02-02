import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigation = useNavigate()
  return (
    <div >
        <AiOutlineHome className='icons' onClick={ ()=> navigation("/")} />
      Sign in
    </div>
  )
}

export default Signin
