import React from 'react'

import { Navbar } from './Navbar/Navbar'
import { Menu } from './Menu/Menu'

import './App.scoped.scss'

export function App() {
  return (
    <div id="root">
      <Navbar />
      <Menu />
    </div>
  )
}
