import React, { Suspense } from 'react'
import './App.css';
import STT_TTS_EKYC from './STT_TTS_EKYC'
import Speech_to_Text from './Speech_to_Text';
import Text_to_Speech from './Text_to_Speech';
import Ekyc_Vi from './Ekyc_Vi';
// import MainLayout from './MainLayout';
import Navbar from './Navbar';
import { Outlet, Route, Routes } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )

}

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = STT_TTS_EKYC
      break
    case "/Speech_to_Text":
      component = Speech_to_Text
      break
    case "/Text_to_Speech":
      component = Text_to_Speech
      break
    case "/Ekyc_Vi":
      component = Ekyc_Vi
      break
  }
  return (
    <>

      <div >

        <Routes>
          <Route path='/' element={<STT_TTS_EKYC></STT_TTS_EKYC>} />
          <Route element={<Navigation />} >
            <Route path='/Speech_to_Text' element={<Speech_to_Text />} />
            <Route path='/Text_to_Speech' element={<Text_to_Speech />} />
            <Route path='/Ekyc_Vi' element={<Ekyc_Vi />} />
            <Route path='*' element={<div>404 page</div>} />
          </Route>
        </Routes>
      </div>
      <component />
    </>

  );
}

export default App;
