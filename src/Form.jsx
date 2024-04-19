import React, { useState } from 'react'
import './form.css'
function Form(props) {
    const [note,setNote]=useState("")
    function addNote(e){
        e.preventDefault();
        if(note.length>0){
            props.fun(note);
            setNote("");
        }  
    }
  return (
    <>
        <form action="" onSubmit={addNote}>
            <input type="text" onChange={(e)=>{
                setNote(e.target.value)
            }} value={note}/>
            <button type="submit">Add Note</button>
        </form>
    </>
  )
}

export default Form
