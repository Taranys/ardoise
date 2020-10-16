import React from 'react'

import { useCreateCategory } from './Menu.hook'

import './Menu.scoped.scss'

export function Menu() {
  const [createCategory, { loading }] = useCreateCategory()

  return (
    <section id="main-menu">
      <h1>Ardoise</h1>
      <div id="categories" />
      <button type="button" onClick={createCategory} disabled={loading}>+</button>
    </section>
  )
}
