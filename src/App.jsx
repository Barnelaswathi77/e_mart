
import React from 'react'
import{Routes,Route} from  'react-router-dom'
import './App.css'
import Landingpage from './stores/pages/Landingpage'

import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import FridgePage from './stores/pages/FridgePage'
import KitchenPage from './stores/pages/KitchenPage'

  import MobileSingle from './stores/singles/MobileSingle'

import UserCart from './stores/UserCart'
import ComputerSingle from './stores/singles/ComputerSingle'
import FridgeSingle from './stores/singles/FridgeSingle'
import WatchSingle from './stores/singles/WatchSingle'
import MenSingle from './stores/singles/MenSingle'
import WomanSingle from './stores/singles/WomanSingle'
import FurnitureSingle from './stores/singles/FurnitureSingle'  
import KitchenSingle from './stores/singles/KitchenSingle'
import AcSingle from './stores/singles/AcSingle'


const App = () =>{
  return(
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/computers' element={<ComputerPage/>}/>
        <Route path='/watch' element={<WatchPage/>}/>
        <Route path='/men' element={<MenPage/>}/>
        <Route path='/woman' element={<WomanPage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        <Route path='/ac' element={<AcPage/>}/>
        <Route path='/fridge' element={<FridgePage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
          <Route path='/mobiles/:id' element={<MobileSingle/>}/>
        
        <Route path='/cart' element = {<UserCart/>} />
        <Route path='/computers/:id' element = {<ComputerSingle />} />
        <Route path='/fridge/:id' element = {<FridgeSingle />} />
        <Route path='/watch/:id' element = {<WatchSingle />} />
        <Route path='/men/:id' element = {<MenSingle />} />
        <Route path='/woman/:id' element = {<WomanSingle />} />
        <Route path='/furniture/:id' element = {<FurnitureSingle />} />
        <Route path='/kitchen/:id' element = {<KitchenSingle />} />
        <Route path='/ac/:id' element = {<AcSingle />} />
      </Routes>
    </div>
  )
}

export default App