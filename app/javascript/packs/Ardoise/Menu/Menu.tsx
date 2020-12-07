import React from 'react'

import { useCategories } from './Menu.hook'

import './Menu.scoped.scss'

export function Menu() {
  const { categories, createCategory, loading } = useCategories()

  return (
    <section id="main-menu">
      <div id="categories">
        {categories.map((categ) => (
          <span key={categ.id}>{categ.name}</span>
        ))}
      </div>
      <button type="button" onClick={createCategory} disabled={loading}>+</button>
    </section>
  )
}
