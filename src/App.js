
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login"
import  Forgot  from './components/forgotPassword';
import Signup from './components/signup';
import Luxury from './components/luxuryroom';
import Delux from './components/deluxroom';
import Superior from './components/superiorroom';
import Family from './components/familyroom';
import Suite from './components/suiteroom';
import Classic from './components/classicroom';


function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Navbar/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/luxury" element={<Luxury/>}/>
      <Route path="/delux" element={<Delux/>}/>
      <Route path="/superior" element={<Superior/>}/>
      <Route path="/family" element={<Family/>}/>
      <Route path="/suite" element={<Suite/>}/>
      <Route path="/classic" element={<Classic/>}/>
      </Routes>
  
     
      
    

    </div>
  );
}

export default App;
