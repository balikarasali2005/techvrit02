import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import QuoteDisplay from './components/QuoteDisplay';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Products1 from './components/Products1'
import { ToastContainer } from 'react-toastify';
import Products from './Pages/Products';
import AddProductForm from './components/AddProductForm';
import { SecureRoute } from './routes/SecureRoute';
function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
 {/* secureroutes */}
 <Route path='/' element={<SecureRoute/>}>
 <Route path="/counter" element={<Counter />}/>
        <Route path='/product1' element={<Products1 />} ></Route>
        <Route path='/product' element={<Products/>}></Route>
        <Route path='/quotes' element={<QuoteDisplay />} />
        <Route path='/product/add'element={<AddProductForm />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}
export default App;