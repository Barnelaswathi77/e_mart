import React from 'react'
import {Routes, Route} from  'react-router-dom'
import './App.css'
import Landingpage from './stores/pages/Landingpage'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import TvPage from './stores/pages/TvPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import BooksPage from './stores/pages/BooksPage'
import MobileSingle from './stores/singles/MobileSingle'

const App = () =>{
  return(
    <div>
        <Routes>
          <Route path='/' element = {<Landingpage />}/>
          <Route path='/mobiles' element = {<MobilePage />} />
          <Route path='/computers' element = {<ComputerPage />} />
          <Route path='/watch' element = {<WatchPage/>}/>
          <Route path='/men' element = {<MenPage/>}/>
          <Route path='/woman' element = {<WomanPage/>}/>
          <Route path='/furniture' element = {<FurniturePage/>}/>
          <Route path='/ac' element = {<AcPage/>}/>
          <Route path='/kitchen' element = {<KitchenPage/>}/>
          <Route path='/tv' element = {<TvPage/>}/>
          <Route path='/speaker' element = {<SpeakerPage/>}/>
          <Route path='/book' element = {<BooksPage/>}/>
            <Route path ='/mobiles/:id' element ={<MobileSingle/>} />    
        </Routes>
    </div>
  )
}

export default App