import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/login.jsx'
import { BrowserRouter, Route, Routes } from'react-router-dom'
import { Sip } from './components/Sip.jsx'
import { Mortage } from './components/Mortage.jsx'
import UserForm from './components/UserForm.jsx'
import SpeechRecognitionComponent from './components/Testvoice.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <BrowserRouter>
      <Routes>
        <Route  index element={<Login />} />
        <Route path="/App" element={<App />} />
        <Route path="/Sip" element={<Sip/>} />
        <Route path='/UserForm' element={<UserForm/>}/>
      
        <Route path='/Mortage' element={<Mortage/>}></Route>
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
