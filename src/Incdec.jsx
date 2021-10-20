import React, { useState } from 'react'

const Incdec = () => {
    const [num, setNum] = useState(0)

    const inc = ()=>{
        setNum(num+1)
    }
    const dec = ()=>{
        if(num > 0){

            setNum(num-1)
        }
        else{
            setNum(num)
            alert("cannot reduce value")
        }
    }
    return (
        <div className="div_style">
            <div className="div_style2">
                <h1>{num}</h1>
            <div className="btn_div">
                <button className="btn1" onClick={inc}>Inc</button>
                <button className="btn1" onClick={dec} disabled={num === 0?false:true}>Dec</button>
            </div>
            </div>
        </div>
    )
}

export default Incdec
