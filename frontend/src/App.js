import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import "./index.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navbar />}>
            {/* <Route index element={<HomeScreen />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
