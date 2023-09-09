import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Tour from '../pages/Tour';
import TourDetails from '../pages/TourDetails';
import Hotel from '../pages/Hotel';
import HotelDetails from '../pages/HotelDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import ThankYou from '../pages/ThankYou';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />

        <Route path='/tours' element={<Tour />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/tours/search' element={<SearchResultList />} />

        <Route path='/hotels' element={<Hotel />} />
        <Route path='/hotels/:id' element={<HotelDetails />} />
        <Route path='/hotels/search' element={<SearchResultList />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/thank-you' element={<ThankYou />} />
    </Routes>
  )
}

export default Routers