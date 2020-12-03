import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

interface Category {
  id: string
  name: string
}

export function useCategories() {
  const [categories, setCategories] = useState(new Array<Category>())
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setLoading(true)

      const response = await axios.get<Category[]>('/api/categories')
      setCategories(response.data)

      setLoading(false)
    })()
  }, [])

  const createCategory = useCallback(async () => {
    const response = await axios.post<Category>('/api/categories', { name: 'New category' })
    setCategories([...categories, response.data])
  }, [categories])

  return {
    categories,
    createCategory,
    loading,
  }
}
