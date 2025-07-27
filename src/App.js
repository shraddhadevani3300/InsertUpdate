import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from "./Login";
import Viewdata from "./Viewdata";
import Insertdata from './Insertdata';
import Updateapi from './Updateapi';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='view' element={<Viewdata/>} />
      <Route path='insertdata' element={<Insertdata/>} />
      <Route path='/update/:id' element={<Updateapi/>} />
    </Routes>
       </>
  )
}

export default App
