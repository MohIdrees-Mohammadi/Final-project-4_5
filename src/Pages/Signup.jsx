import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigation = useNavigate()
  return (
    <div>
        <AiOutlineHome size={32} onClick={ ()=> navigation("/")} />
      SIgn up
    </div>
  )
}

export default Signup
