import React from 'react'
import SignUp from './SignUp'
import ValueAdd from './ValueAdd'
import Mission from './Mission'
import Header from './components/Header'
import Footer from './components/Footer'

const LandingPage = () => {
  return (
    <div className="bg-blue-800 min-h-screen">
    <Header/>
   <section className="md:flex gap-2 p-6 bg-gray-100">
      <ValueAdd/>
      <SignUp/>
    </section>
      <Mission/>
      <Footer/>
  </div>
  )
}

export default LandingPage