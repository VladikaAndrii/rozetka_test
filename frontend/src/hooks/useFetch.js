import axios from "axios"
import { useState, useEffect } from "react"

const useAxios = ({ url, body = null, headers = null }) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(url, { headers, body })
        setData(response)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, body, headers])

  return { data, error, loading }
}

export default useAxios
