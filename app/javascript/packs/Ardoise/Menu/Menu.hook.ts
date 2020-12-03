import { useCallback, useEffect, useState } from 'react'

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

      const response = await fetch('/api/categories')
      // TODO manage error
      setCategories(response.ok ? await response.json() : [])

      setLoading(false)
    })()
  }, [])

  const createCategory = useCallback(async () => {
    const response = await fetch('/api/categories', { method: 'POST', body: JSON.stringify({ name: 'New category' }) })
    // TODO manage error
    setCategories(response.ok ? [...categories, await response.json()] : categories)
  }, [])

  console.log('🚀 ~ file: Menu.hook.ts ~ line 32 ~ useCategories ~ categories', categories)
  return {
    categories,
    createCategory,
    loading,
  }
}
