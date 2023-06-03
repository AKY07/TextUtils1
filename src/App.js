import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
// npm install react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const  [mode, setMode] = useState('light');   //wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const [modeName, setmodeName] = useState('Enable Dark Mode')
  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
       setTimeout(() => {
        setAlert(null);
       }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode has been enabled","success")
      setmodeName("Enable Light Mode")
      document.title='TextUtils - DarkMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled","success")
      setmodeName("Enable Dark Mode")
      document.title='TextUtils - LightMode'
    }
  }
  return ( 
   <>
   <Router>
 <Navbar modeName={modeName} title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container my-3">
  <Routes>
  <Route exact path='/' element={ <TextForm  showAlert={showAlert} heading="Enter The Text to Analyze Below" mode={mode} />} />
  <Route exact path='/about' element={<About/>} />
  
  </Routes>
 </div>
 </Router>


   </>
  );
}

export default App;
