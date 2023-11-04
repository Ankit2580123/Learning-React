import React,{useState} from 'react'

export default function About() {
                    const [myStyle,setmyStyle]=useState({
                                        color:"black",
                                        backgroundColor:"white",
                                        border:"1px solid black"
                    });
                    const [btntext,setbtnText]=useState("Enable Dark Mode")
                   

                    let toggleStyle=()=>{
                                        if(myStyle.color=="black"){
                                                           setmyStyle({
                                                            color:"white",
                                                            backgroundColor:"black",
                                                            border:"3px solid white"
                                                           })
                                                           setbtnText("Enable Light Mode");

                                        }
                                        else{
                                                            setmyStyle({
                                                                                color:"black",
                                                                                backgroundColor:"white",
                                                                                border:"1px solid black"
                                                            })
                                                            setbtnText("Enable Dark Mode");
                                        }
                    }
  return (
                  
    <div className='container my-3' style={myStyle}>
                    <h1>Dark & Light Mode Switcher</h1>
                    <div className="card my-4" style={myStyle}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                    <div className="card my-3" style={myStyle} >
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                    <div className="card my-3" style={myStyle}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                    <button  type="button" class="btn btn-primary my-3" onClick={toggleStyle}>{btntext}</button>
    </div>
  )
}
