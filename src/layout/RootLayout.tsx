import { Outlet } from "react-router-dom"
import Header from "../Componants/Header"
import Footer from "../Componants/Footer"
import React from "react"


const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
