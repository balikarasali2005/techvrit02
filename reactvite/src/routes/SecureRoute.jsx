import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SecureRoute = () => {
    const isLoggedIn =useSelector((state) => state.authReducer.isLoggedIn)
    const loggedin=Boolean(isLoggedIn);
    console.log(loggedin,typeof loggedin);
  return (
    <>{
        loggedin ? <Outlet /> : <Navigate to="/"/> 
    }
    </>
  )
}
