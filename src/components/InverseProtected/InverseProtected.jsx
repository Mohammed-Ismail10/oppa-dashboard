import React from 'react'
import { Navigate } from 'react-router-dom'

export default function InverseProtected({ children }) {


  if (localStorage.getItem('accessToken')) {
    return <Navigate to={'/'} />;
  }
  else {
    return children;
  }


}
