import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App | Paarth Sarthi</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     prop: {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children : 'Click me to visit google'
// } 

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visitgoogle</a>
)

const anotherUser = "Chai Aur React"

const reactElement =React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement
)

createRoot(document.getElementById('root')).render(

    reactElement
)
