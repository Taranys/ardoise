import React from 'react'
import ReactDOM from 'react-dom'

function Hello({ name = 'React' }) {
  return (
    <div>Hello {name}</div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.body.appendChild(document.createElement('div')),
  )
})
