import React from 'react'
// import './product.css'
import {Card,Button,CardFooter,CardBody,CardHeader,CardImg} from "react-bootstrap"
const Product = (props) => {
  // const products = [{name:"product 1",}]
  return ( 
    <>
<div className="d-felx flex-wrap gap-3">
{props.products.map((product)=>{
return (
 <Card key={product.id} style={{width:"30%", height:"400px"}} >
  <CardHeader style={{height:"50%"}}>
  <CardImg className="h-100 w-100" src={product.thumbnail} />
    <h2 className='mt-2'>{product.title.length > 6 ? product.title.slice(0,5)+"...":product.title}</h2>
  </CardHeader>
  <CardBody>
    <p className='mt-4'>{product.description.length > 6?product.description.slice(0,10)+"...":product.description}</p>
  </CardBody>
  <CardFooter>
<Button variant="primary" className="me-3">view</Button>
<Button variant="secondary" className="me-3">Edit</Button>
<Button variant="danger">Delete</Button>
  </CardFooter>
 </Card>
)
})}
</div>

        {/* <div className="card">
      <img src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9lbSUyMGFib3V0JTIwc2VsZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
      <h2 style={{textAlign:"center"}}>Image1</h2>
      <button style={{marginLeft:"5.3rem", marginBottom:"1rem"}}>Click</button>
     
      </div>
      <h2 className='text-center'>{props.abc}</h2> */}
    </>
  )
}

export default Product;
