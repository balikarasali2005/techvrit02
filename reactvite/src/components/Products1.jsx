import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardImg ,Button} from 'react-bootstrap';
const Products1 = () => {
const [products,setProducts]=useState([]);
useEffect(()=>{
     axios.get("https://dummyjson.com/products")
    .then(({data})=>{
        setProducts(data.products);
    });},[]);
return(
    <div className='bg-info'>
    <marquee style={{color:"white", backgroundColor:"blue",height:"50px" , fontSize:"20px", borderColor:"pink",borderStyle:"dotted" }} className="p-2">THIS IS A REACT CARD COMPONENT</marquee>
    <div className='d-flex flex-wrap  justify-content-center gap-3 p-2'>
        {products.map((product)=>{
            return(
                <Card style={{width:"350px", height:"450px"}}>
                    <CardHeader className='h-50'>
                        <CardImg src={product.thumbnail} className='h-100'></CardImg>
                    </CardHeader>
                    <CardBody>
                        <Card.Title> {product.title}</Card.Title>
                       <Card.Subtitle> {product.description.length > 15 ? product.description.slice(0,20)+"...":product.description}</Card.Subtitle>
                    </CardBody>
                    <CardFooter>
         <Button variant="primary" className='me-2'>ViewDetails</Button>
         <Button variant="info"className='me-2'>Edit</Button>
         <Button variant="danger">Delete</Button>
                </CardFooter>
                </Card>
            )})}
          </div>
         </div>
)}
export default Products1;
