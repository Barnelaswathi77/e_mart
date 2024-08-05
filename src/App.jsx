import React from 'react'
import{Routes,Route} from  'react-router-dom'
import './App.css'
import Landingpage from './stores/pages/Landingpage'
const App = () =>{
  return(
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
    
      </Routes>
    </div>
  )
}

export default App