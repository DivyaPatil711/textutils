import React, {useState} from 'react'

export default function TextForm(props) {
  console.log(props)
    const handleUpClick = ()=>{
      console.log("upeer case")
        let newText = text.toUpperCase();
        setText(newText);
       props.showAlert("Converted to uppercase","success ")
    }
    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");
   }
   const handleCtClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!","success");
 }
 const handleExtraSpaces = ()=>{
  let newText = text.split(/[  ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed","success")
}
   const handleCopy=()=>{
    let text1=document.getElementById("myBox");
    text1.select();
    text1.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text1.value);
    props.showAlert("Copied to clipboard","success");
   }
    const handleOnChange = (event)=>{
        
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container'style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>  
        <div className="mb-3">
        <textarea className="form-control "  onChange={handleOnChange}  placeholder="Enter text here" value={text} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCtClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
       <div className='container my-3'style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split("").length===0?text.split("").length:text.split(" ").length} words and {text.length} characters</p>  
        <p>{0.008 * text.split(" ").length} Minutes read</p>        
        <h2>Preview</h2> 
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p> 
      </div>  
    </>
  )
}
