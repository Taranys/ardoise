import React from 'react'
import { Menu } from './Menu/Menu'

import "./App.scoped.scss"

export function App() {
  return (
    <div id="root">
      <aside>
        <Menu/>
      </aside>
      <section>
        {/* <Header></Header>
        <Content></Content> */}
      </section>
    </div>
  )
}