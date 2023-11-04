import React, { useState } from 'react'

export default function TextForm(props) {
  

  const handleUpperCase = () => {

    let newText = text.toUpperCase();
    setText(newText);
    
  }
  const handleLowerCase = () => {

    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearText = () => {

    let newText = " ";
    setText(newText);
  }
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter Text Here");
  let word = text.split(" ");

  let newCleanWord = word.filter(function (elm) {
    return elm != " ";
  });
  return (
    <>
      <div>
        <div className="mb-3">
          <textarea rows="12" className="form-control" value={text} onChange={handleChange}></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpperCase}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLowerCase}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>
      
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.trim().length} Characters Including Spaces</p>
        <p>{newCleanWord.length - 1} Words</p>
      </div>
    </>


  )
}
