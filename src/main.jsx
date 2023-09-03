import React from 'react'
import ReactDOM from 'react-dom/client'
import { Component } from './Component'
import { Counter } from './Counter'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Component title="hola hola" />
        <Counter />
    </React.StrictMode>
)