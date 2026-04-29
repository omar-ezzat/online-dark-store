import React from "react"
import { Box } from "@mui/material"
import Navbar from "./components/navbar"
import ProductCarousel from "./components/ProductCarousel"
import ProductsSection from "./components/ProductsSection"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <Box sx={{bgcolor: "#0f0f0f", color:"white", minHeight:"100vh"}}>
        <Navbar/>
        <ProductCarousel/>
        <ProductsSection/>
        <About/>
        <Footer/>
      </Box>
    </>
  )
}

export default App
