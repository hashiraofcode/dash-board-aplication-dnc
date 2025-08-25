import { useState } from 'react'
import axios, { type AxiosRequestConfig } from 'axios'

const axioInstace = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
})

export const useAxios = <T, P>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | number | null>(null)
  const [loading, setLoading] = useState(false)

  const postData = async (contentData: P, config?: AxiosRequestConfig) => {
    setLoading(true)
    setData(null)
    try {
      const response = await axioInstace({
        url: endpoint,
        method: 'POST',
        data: JSON.stringify(contentData),
        headers: {
          'Content-Type': 'application/json',
          ...config?.headers,
        },
        ...config,
      })
      setData(response?.data)
    } catch (e: any) {
      if (e?.status > 299) setError(e.status ?? 500)
    } finally {
      setLoading(false)
    }
  }
  return { postData, error, data, loading }
}
