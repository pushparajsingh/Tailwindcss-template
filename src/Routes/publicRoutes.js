import React from 'react'
import Index from '../Pages';
import { Routes,Route } from 'react-router-dom';

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
    </>
  )
}

export default PublicRoutes
