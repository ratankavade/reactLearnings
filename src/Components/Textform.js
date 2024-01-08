import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const onLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const onClearClick = ()=>{
    setText("");
  }

  return (
    <div className="py-3">
      <div className="form-floating">
        <h2>{props.heading}</h2>
        <textarea className="form-control p-3" placeholder="Enter Text Here" value={text} onChange={onTextChange} rows="7" style={{ height: "100%" }}></textarea>
        <button type="submit" className="btn btn-primary mt-2" onClick={onUpClick}>Change to uppercase</button>
        <button type="submit" className="btn btn-primary mt-2 mx-2" onClick={onLoClick}>Change to lowercase</button>
        <button type="submit" className="btn btn-primary mt-2" onClick={onClearClick}>Clear Text</button>
      </div>
      <div className="py-3">
        <h3>The above paragraph have</h3>
        <p>{text.split(" ").length} words AND {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
