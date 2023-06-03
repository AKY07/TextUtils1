import React, { useState } from "react"; //useState is a hook+

export default function TextForm(props) {
  const hanleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase","success")
  };
  const hanlelowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase","success")
  };
  const hanleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","success")
  };
  
  
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}}  className="container">
         <h1 >{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange}
          id="mybox"
          rows="8"
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'grey'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={hanleUpClick}>
        convert to UPPERCASE
      </button>
      <button className="btn btn-primary mx-2" onClick={hanlelowerClick}>
        CONVERT TO lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={hanleClrClick}>
        CLEAR
      </button>
    </div>
    <div className="container my-3 "  style={{color:props.mode==='dark'?'white':'black'}}>

        <h2>Your text Summary</h2>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length - 0.008 } Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something the text box above to Preview it here"}</p>
    </div>
    </>
  );
}
