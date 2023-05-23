import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"
import { setProducts } from "./features/productsSlice"
import useFetch from "./hooks/useFetch"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import Checkout from "./screens/Checkout/Checkout"
import Layout from "./screens/Layout/Layout"

function App() {
  const dispatch = useDispatch()
  const { data, error, loading } = useFetch({
    url: "http://ec2-16-16-218-11.eu-north-1.compute.amazonaws.com/api/productsproduct/",
  })

  useEffect(() => {
    if (data) {
      dispatch(
        setProducts([
          {
            id: 2,
            title: "Валіза кремова Cat",
            brand: "Caterpillar",
            country: "США",
            size: "20л",
            color: "кремовий",
            category: 2,
            price: "1300.00",
            created_at: "2023-05-22T15:23:31.630145+03:00",
            updated_at: "2023-05-22T15:23:31.630158+03:00",
          },
          {
            id: 4,
            title: "Валіза March 76х28х51 см 100 л",
            brand: "March",
            country: "Нідерланди",
            size: "76х28х51 см",
            color: "Жовтий",
            category: 2,
            price: "4999.99",
            created_at: "2023-05-22T18:15:21.284860+03:00",
            updated_at: "2023-05-22T18:15:21.284873+03:00",
          },
          {
            id: 3,
            title: "Дорожньо-спортивна сумка Valiria Fashion  32 л Чорна",
            brand: "Valiria Fashion",
            country: "Китай",
            size: "49 x 30 x 22 см",
            color: "Чорна",
            category: 3,
            price: "685.00",
            created_at: "2023-05-22T18:10:36.085647+03:00",
            updated_at: "2023-05-22T18:10:36.085660+03:00",
          },
          {
            id: 1,
            title: "Рюкзак чорний Harvest",
            brand: "Harvest",
            country: "Україна",
            size: "20x40x20",
            color: "чорний",
            category: 4,
            price: "699.00",
            created_at: "2023-05-22T15:18:54.076534+03:00",
            updated_at: "2023-05-22T15:18:54.076548+03:00",
          },
          {
            id: 5,
            title: "Рюкзак Tucano Tugo M Cabin Green",
            brand: "Tucano",
            country: "Китай",
            size: "15х40х30 см",
            color: "Зелений",
            category: 4,
            price: "2589.00",
            created_at: "2023-05-22T18:21:03.142199+03:00",
            updated_at: "2023-05-22T18:21:03.142214+03:00",
          },
        ])
      )
    }
  }, [data])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            {/* <Route index element={<HomeScreen />} /> */}
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
