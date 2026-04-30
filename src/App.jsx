import React, { useRef } from "react"
import { Box } from "@mui/material"
import Navbar from "./components/navbar"
import ProductCarousel from "./components/ProductCarousel"
import ProductsSection from "./components/ProductsSection"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {

  const homeRef = useRef(null)
  const productsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <>
      <Box sx={{ bgcolor: "#0f0f0f", color: "white", minHeight: "100vh" }}>
        <Navbar sections={{ home: homeRef, products: productsRef, about: aboutRef, contact: contactRef }} />
        <Box ref={homeRef}>

          <ProductCarousel />
        </Box>
        <Box ref={productsRef}>

          <ProductsSection />
        </Box>
        <Box ref={aboutRef}>

          <About />
        </Box>
        <Box ref={contactRef}>

          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default App
