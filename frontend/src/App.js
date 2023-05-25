import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
// import Carousel from "./components/Caroules/Carousel"
import Product from "./components/Product/Product"
import "./index.css"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navbar />}>
            {/* <Route index element={<HomeScreen />} /> */}
            {/* <Route index element={<Carousel />} /> */}
            <Route index element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
