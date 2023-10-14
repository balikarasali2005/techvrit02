import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const SecureRoute = () => {
    const isLoggedIn =localStorage.getItem("isLoggedIn")
    const loggedin=Boolean(isLoggedIn);
    console.log(loggedin,typeof loggedin);
  return (
    <>{
        loggedin ? <Outlet /> : <Navigate to="/"/> 
    }
    </>
  )
}
