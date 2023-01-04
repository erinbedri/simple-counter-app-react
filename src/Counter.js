import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)
    const [action, setAction] = useState('Start')

    function increaseHandler () {
        setCounter(oldCounter => oldCounter + 1)
        setAction('Increased by 1')
    }

    function decreaseHandler () {
        setCounter(oldCounter => oldCounter - 1)
        setAction('Decreased by 1')
    }

    function clearHandler () {
        setCounter(0)
        setAction('Cleared')
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2 className='counter'>{counter}</h2>
            <h3>{action}</h3>
            <div>
                <button onClick={decreaseHandler} className='btn'>-</button>
                <button onClick={clearHandler} className='btn'>Clear</button>
                <button onClick={increaseHandler} className='btn'>+</button>
            </div>
        </div>
    )
}
