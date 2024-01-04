//cleanup function

import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
    const [width,setWidth] =useState(window.screen.width);

    const actualWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect (() => {
        window.addEventListener("resize" ,actualWidth);

        return () => {
        window.removeEventListener("resize" ,actualWidth);
        }
    })

  return (
    <div>
      <h1>Actusl Width of Your Window</h1>
      <h2>{width}</h2>
    </div>
  )
}

export default App
