import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'

export default function(props) {

    return (
      <div id="body">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    )


}