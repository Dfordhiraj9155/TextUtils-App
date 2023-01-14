import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //state variable whether dark mode is enabled or not
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#242222';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light Mode Enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      {/* <Navbar/> */}
      <div className='container my-3'>
         <Routes>
          {/* /users -->components1 */}
          {/* /users/home --> components2 */}
          <Route exact path="/" element={
           <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter ,Remove Extra Space" mode={mode}/> 
          }/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
         </Routes>
    </div>
    {/* <About/> */}
      </BrowserRouter>
      </>
  );
}

export default App;
