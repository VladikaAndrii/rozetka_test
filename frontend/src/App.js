import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"
import { setProducts } from "./features/productsSlice"
import useFetch from "./hooks/useFetch"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import Checkout from "./screens/Checkout/Checkout"
import Layout from "./screens/Layout/Layout"
import ProductsScreen from "./screens/ProductsScreen/ProductsScreen"
import ProductScreen from "./screens/ProductScreen/ProductScreen"
import HomeScreen from "./screens/HomeScreen/HomeScreen"

function App() {
  const dispatch = useDispatch()
  const { data, error, loading } = useFetch({
    url: "http://ec2-13-48-28-211.eu-north-1.compute.amazonaws.com/api/productsproduct/",
  })

  useEffect(() => {
    if (!data) return
    dispatch(setProducts(data))
  }, [data])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products-searched" element={<ProductsScreen />} />
            <Route path="/products/:id" element={<ProductScreen />} />
            <Route path="/products-searched/products/:id" element={<ProductScreen />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
