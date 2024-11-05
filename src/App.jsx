import Footer from "./components/Footer"
import Header from "./components/Header"
import BookingPage from "./pages/BookingPage"
// import HomePage from "./pages/HomePage"




function App() {

  return (
    <div  className="font-poppins">
      <Header/>
      {/* <HomePage/> */}
      <BookingPage/>
      <Footer/>
    </div>
  )
}

export default App