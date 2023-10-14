import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList';
import Loader from '../components/Loader';
import { errorToast } from '../services/toast.sevices';
import { Button,Form, FloatingLabel } from 'react-bootstrap';
import AddProduct from '../components/AddProduct';
import { useNavigate } from 'react-router-dom';
import EditProduct from '../components/EditProduct';

const Products = () => {
    const[products,setProducts]=useState([]);
    const[originalProduct,setOriginalProduct]=useState([])
    const[categories,setCategories]=useState([])
const [product,setProduct]=useState({
  title:"",
  thumbnail:"",
  description:"",
})

    const [loading,setIsLoading]=useState(false);
    const [show,setShow]=useState(false);
    const [ShowEdit,setshowEdit]=useState(false);
    const[editedProduct,setEditedProduct]=useState({})
    // const navigate= useNavigate()

    const URL=import.meta.env.VITE_BACKEND_URL;

    const getData = async()=>{   
try{
    setIsLoading(true);
    const {data} = await axios.get(URL+'product');
    // const users = await axios.get(URL + 'users')
    setProducts(data.products);
    setOriginalProduct(data.products);

const categories = data.products.map((product)=>{
  return product.category;
});
const uniqueCategories = [...new Set(categories)];
setCategories(uniqueCategories);

    setIsLoading(false)
}catch(error){
errorToast(error.response.data)
setIsLoading(false);
}}
useEffect(()=>{
getData();
    },[])
    const deleteHandler = (e, id) => {
        e.preventDefault();
        const filteredProds = products.filter((prod)=>{
            return prod.id !== id;
        })
        setProducts(filteredProds)
        // console.log(id)
         };

// for add product
const showProduct = (e)=>{
e.preventDefault();
setShow(true);
// navigate('/product/add')
         };
function handleClose(){
    setShow(false);
}
  const handleChange=(e)=>{
setProduct((prev)=>{
 return{ ...prev,[e.target.name]:e.target.value,id:Date.now()};
});
  }
  const addProductHandler =(e)=>{
    e.preventDefault();
    // products.unshift(product);
     setProducts([product, ...products]); 
     setShow(false);
  }

  // edit handle
function handleCloseEdit(){
  setshowEdit(false)
}
const editHandler = (e,id)=>{
e.preventDefault()
const prod = products.find((product)=>product.id===id);
// console.log(prod)
setEditedProduct(prod);
setshowEdit(true);
  }
function  handleEditChange(e){
setEditedProduct((prev)=>{
  return{...prev,[e.target.name]:e.target.value,}
});
}
function editProduct(e){
  e.preventDefault();

  const updatedProd=products.map((product)=>{
return product.id === editedProduct.id ? editedProduct:product;
  })
  setProducts(updatedProd);
  setshowEdit(false);
}

// for search product
 function searchProduct(e){

const searchedData = originalProduct.filter((product)=>{

  return product.title.toLowerCase().includes(e.target.value.toLowerCase());
});
setProducts(searchedData);
 }
//  for filter category
function filterProducts(data){
  if(data !== ""){
const filteredProd = originalProduct.filter((item)=>{
  return item.category === data;
})
setProducts(filteredProd);
  }else{
    setProducts(originalProduct)
  }
}  

 return ( 
<>
{loading ? (
    <Loader />
    ):(
  <>
  <div className='d-flex justify-content-between mb-3'>
  <Button variant='success'  onClick={showProduct}>AddProduct</Button>

{/* for filter category */}
  <Form.Select style={{width:"170px"}} size="sm" onChange={(e) => filterProducts(e.target.value)}>
      <option value="">Filter Category</option>
   {
    categories.map((category)=>{
      return (<option key={category}  value={category}>{category}</option>
      );
    })
   }
    </Form.Select>

{/* for search product */}
<FloatingLabel
          controlId="floatingInput"
          label="Search Product Here"
        >
          <Form.Control
            type="text"
            name="searchkey"
            onChange={searchProduct}
         
          />
        </FloatingLabel>
  </div>
  <div className='d-flex flex-wrap gap-3 '>
  { 
       products.map((product)=>{
        return (<ProductList
        key={product.id}
         product={product}   
         deleteHandler={deleteHandler}
         editHandler={editHandler}
       /> 
        );
})}
  </div>
  <AddProduct show={show} handleClose={handleClose}
   handleChange={handleChange}
   addProductHandler={addProductHandler}
    />
      <EditProduct
      show={ShowEdit} handleClose={handleCloseEdit}
   handleChange={handleChange}
   editedProduct={editedProduct}
   handleEditChange={ handleEditChange}
   editProduct={editProduct}
    />
  </>
)}
</>
  );
}
export default Products;
