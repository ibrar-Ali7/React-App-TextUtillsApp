import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from 'react';
import Alert from "./Components/Alert";

function App() {
  const [mode, SetMode] =useState('light');
  const [alert,setAlert]=useState(null)
 const toggleMode = () =>{
  if (mode==='light'){
    SetMode('dark')
    document.body.style.backgroundColor='#2d3439'
  }
  else{
    SetMode('light')
    document.body.style.backgroundColor='white'
  }
 }
  return (
    <>
      <Navbar about={1} mode={mode}  toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm title="" mode={mode} />
        {/* <About /> */}
        <Alert Alert="Warning!! Please Enter Your Text"/>
      </div>
    </>
  );
}

export default App;
