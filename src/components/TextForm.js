import React,{useState} from 'react'


export default function TextForm(props) {

    const [text,setText]=useState('')
    // text="enter text here" Wrong way to set state
    // setText("enter text here") correct way to set state

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Converted to UpperCase","success");
    }
    const handleLowClick=()=>{
        let newText=text.toLocaleLowerCase();
        setText(newText);
        props.showalert("Converted to LowerCase","success");
    }
    const handleClear=()=>{
        let newtext="";
        setText(newtext);
        props.showalert("Text Cleared","success");
    }
    
    const handleSpeak=()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);

    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showalert("Copied to Clipboard","success");
    }

    const handleExtraSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showalert("Extra Spaces Removed","success");
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
        
    }

  return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'rgb(16 15 16)'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#27242d':'white' ,color:props.mode==='dark'?'white':'rgb(16 15 16)' }} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>CopyText</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleSpeak}>Speak</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'rgb(16 15 16)'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters </p>
            <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read.</p>
            <h2>Preview</h2>
            {text.length>0?text:"Nothing to Preview."}
        </div>
    </>
  )
}
