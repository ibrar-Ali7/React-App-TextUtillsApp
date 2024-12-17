import './textbar.css'
import React,{useState} from 'react'

export default function TextForm(props) {
const [text, setText] = useState(''); 
const coverToUpperCase = () =>{
 let newText = text.toUpperCase()
  setText(newText)
}
const handleOneChange = (event) =>{
  setText(event.target.value)
}
const ConvertLowerCase = () =>{
  let lowerCaseText = text.toLocaleLowerCase()
  setText(lowerCaseText)
}
const clearText = () =>{
  setText("")
} 

  return (
    <div>
    <div className='container ' >
    <h1>{props.title}</h1>
  <textarea className="form-control" value={text} onChange={handleOneChange} id="exampleFormControlTextarea1" rows="2" maxLength={300}></textarea>
  <button className="btn btn-primary my-3 mx-1" onClick={coverToUpperCase}> Convert to Uppercase letter</button>
  <button className="btn btn-primary my-3 mx-2" onClick={ConvertLowerCase}> Convert to LowerCase letter</button>
  <button type="button" class="btn btn-danger mx-1" onClick={clearText}>Delete Text</button>
  </div>
  <div className="container">
    <h2>Here is Your Text Summery</h2>
    <p>
    <b>
          You typed:{" "}
          {text.split(" ").filter((word) => word !== "").length === 0 ? (
            <>No Words & {text.length} characters</>
          ) : (
            <>
              You have{" "}
              {text.split(" ").filter((word) => word !== "").length} words &{" "}
              {text.length} characters
            </>
          )}
        </b>
    </p>
    <p>You can read this in {0.008 * text.split (" ").length} minutes</p>
    <h2 >Preview</h2>
    <p>{text}</p>
  </div>
  
  </div>
 
  )
}
