import React, { useState } from 'react'
import './display.css'
function Display(props) {
    let arr=props.arr
    function remove(e){
        console.log(e.target.id)
        props.rem(e.target.id)
    }
  return (
    <>
    {
        arr.map((data,ind)=>{
            return (
            <div id={ind} className='ele'>
                <p>{data}</p>
                <button onClick={remove} id={ind}>Remove</button>
            </div>
            )
        })
    } 
    </>
  )
}

export default Display