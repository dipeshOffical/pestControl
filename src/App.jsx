import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import BookingPage from "./pages/BookingPage"
import HomePage from "./pages/HomePage"



function App() {

  return (
    <div className="font-poppins">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App