import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PlaceDetails from '../page/PlaceDetails'
import PlaceList from '../page/PlaceList'
const Outlet = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PlaceList />} />
        <Route path='/place/:id' element={<PlaceDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Outlet
