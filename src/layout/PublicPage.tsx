import React from 'react'
import Header from '../Components/PublicPage/Header/Header'
import Footer from '../Components/PublicPage/Footer/Footer'
import { Outlet } from 'react-router-dom'

const PublicPage: React.FC = () => {
  return (
    <div className='font-klein'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicPage