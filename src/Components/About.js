import React from "react";
import { useState } from "react";
export default function About(props) {
   
    const [myStyle, SetMyStyle] =useState(
        {
        color:'white',
        backgroundColor:'black',
        }
    )
    const [btnText, SetBtnText]=useState('Disable Dark Mode ')
   const darkModeON = ()=>{
    if ( myStyle.color=='white'){
        SetMyStyle({
            color:'black',
            backgroundColor:'white',
      
        })
        SetBtnText("Enable Dark Mode")
    } 
    else{
        SetMyStyle(
            {
            color:'white',
            backgroundColor:'Black',
                  border:'1px Solid White'
            
        })
        SetBtnText("Disable Dark Mode")
    }
   
 
   }
    
  return (
    <div className="container my-2" style={myStyle}>
      <h1>About Us</h1>
      <div id="accordion">
        <div className="card mb-2">
          <div className="card-header" id="headingOne" style={myStyle}
          >
            <h5 className="mb-0" style={myStyle}>
              <button
                className="btn btn-link"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Collapsible Group Item #1
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordion"
            style={myStyle}
          >
            <div className="card-body" style={myStyle}>
              This is the content for Group Item #1.
            </div>
          </div>
        </div>
        <div className="card mb-2"  style={myStyle}>
          <div className="card-header" id="headingTwo" style={myStyle} >
            <h5 className="mb-0" style={myStyle}>
              <button
                className="btn btn-link collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Collapsible Group Item #2
              </button>
            </h5>
          </div>

          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordion"
          >
            <div className="card-body">
              This is the content for Group Item #2.
            </div>
          </div>
        </div>
        <div className="card mb-2" style={myStyle}>
          <div className="card-header" id="headingThree" style={myStyle}>
            <h5 className="mb-0" style={myStyle}>
              <button
                className="btn btn-link collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Collapsible Group Item #3
              </button>
            </h5>
          </div>

          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordion"
          >
            <div className="card-body">
              This is the content for Group Item #3.
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-secondary " onClick={darkModeON}>{btnText}</button>

    </div>
  );
}
