import React from 'react'


import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Outlet } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <Header />
      
      <main style={{height: '89.2vh'}}>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}

export default Home
