import { useState } from 'react'
import './App.css'
import Form from './Form'
import Display from './Display'
function App() {
  const [notes, setNotes] = useState([])
  function noteAdder(note){
    let temp=[...notes,note]
    setNotes(temp)
    console.log(notes)
  }
  function removeEle(ind){
    let temp=[]
    for(let i=0;i<notes.length;i++){
      if(i!=ind){
        temp.push(notes[i])
      }
    }
    setNotes(temp);
  }
  return (
    <>
      <h1>Notes</h1>
      <Form fun={noteAdder}/>
      <Display arr={notes} setArr={setNotes} rem={removeEle}/>
    </>
  )
}

export default App
