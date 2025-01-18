import React from 'react'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './components/indexPage/IndexPage'

const App = () => {
  return (
<>
<Routes>


  <Route path='/' element={<IndexPage/>} />
</Routes>
</>
  )
}

export default App