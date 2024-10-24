import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Form from './components/Form'
import Navbar from './components/Navbar'
import All_Notes from './components/All_Notes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>

   
   <Routes>

    <Route path='/' element={<Form />} />
    <Route path='/allNotes' element={<All_Notes />} />

   </Routes>
    </>
  )
}

export default App
