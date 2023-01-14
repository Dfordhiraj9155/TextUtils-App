import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpCase = ()=>{
        // console.log('Btn is clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted To UpperCase","success");
    }
    const handleLpCase = ()=>{
        // console.log('Btn is clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted To LowerCase","success");
    }
    const handleClearCase = ()=>{
        // console.log('Btn is clicked' + text);
        let newText = '';
        setText(newText);
        props.showAlert("cleared all text","success");
    }
    const handleExtraSpace = ()=>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "));
    }
    const copyText = ()=>{
        var newText = document.getElementById("myBox");
        newText.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(newText.value);
    }
    const handleOnChange = (event)=>{
        // console.log('On Change');
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode ==='light'?'black':'white'}}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
           {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
           <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode ==='light'?'white':'#5d4242',color:props.mode ==='light'?'black':'white'}} value={text} rows="8"></textarea>
        </div>
       <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleUpCase}>Convert to UpperCase</button>
       <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleLpCase}>Convert to LowerCase</button>
       <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleClearCase}>Clear all Text</button>
       <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
       <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode ==='light'?'black':'white'}}>
       <h1>Your Text Summary</h1>
       <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words,{text.length} Characters</p>
       <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Minutes To Read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:'Enter something in above box to preview'}</p>
    </div>
    </>
  )
}
