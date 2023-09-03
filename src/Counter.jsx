import { useState } from "react";


export const Counter = () => {

    let [counter, setCounter] = useState(0);

    const adjustCounter = ( adjustment ) => {
        const newCounter = counter + adjustment
        setCounter(newCounter)
        console.log({ newCounter })
    }

    return (
        <>
            <h1>Counter</h1>
            <h2>{ counter }</h2>
            <button onClick={ () => adjustCounter(1) }>+1</button>
            <button onClick={ () => adjustCounter(-1) }>-1</button>
            <button onClick={ () => adjustCounter(-counter) }>reset</button>
        </>
    )

}