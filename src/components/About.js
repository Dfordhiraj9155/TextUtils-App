import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // });
    // const [btnText,setBtnText] = useState('Enable Dark Mode')
    // const toggleStyle = ()=>{
    //     if(myStyle.color == 'black')
    //     {
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText('Enable Light Mode')
    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    // }
    let myStyle = {
        color:props.mode === 'dark'? 'white' : 'black',
        backgroundColor:props.mode === 'dark'? '#242222' : 'white',
        borderStyle: 'ridge'
    }
    return (
        <div className="container my-3" style={{color:props.mode === 'dark'? 'white' : 'black'}}>
            <h1>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle} >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>TextUtils About</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">TextUtils gives u a way to analyze your text quickly and efficiently.Be it word count, character count etc</div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">TextUtils is a free character counter tool that provides instant character count & word count 
                        statics for a given text. TextUtils report the number of words and characters.This issuitable for writing text with word/character limit</div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>Browser Compatiable</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">This word counter software works in any browser such as chrome ,firefox,opera,Safari etc. It suits to count character facebook,blog,books,excel document,pdf,document,essays etc </div>
                    </div>
                </div>
            </div>
            {/* <div className='container'>
            <button type='button' className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>

            </div> */}
        </div>
    )
}
