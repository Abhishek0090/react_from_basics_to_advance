import React, { useState } from 'react'

const App = () => {
    let [count, setCount] = useState(0)
    const IncNum = ()=>{
            setCount(count++)
    }
    return (
       <>
       <div className="div_style">
       <h1>{count}</h1>
       <button className="btn" onClick={IncNum}>Click Here</button>
       </div>
        </>
    )
}

export default App
