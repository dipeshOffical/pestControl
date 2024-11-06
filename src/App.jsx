import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import BookingPage from "./pages/BookingPage"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicePage from "./pages/ServicePage"
import BlogPage from "./pages/BlogPage"



function App() {

  return (
    <div className="font-poppins">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App