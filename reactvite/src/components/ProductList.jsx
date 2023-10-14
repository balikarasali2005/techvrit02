import React from 'react'
import { Card, CardBody, CardHeader, CardFooter, Button} from 'react-bootstrap'

const ProductList = ({product, deleteHandler,editHandler}) => {
  return (
    <Card style={{width:"30%", height:"700px"}}>
                    <CardHeader className='h-50'>
                        <Card.Img className='h-100' src={product.thumbnail}></Card.Img>
                    </CardHeader>
                    <CardBody>
                       <h2>{product.title.length > 12? product.title.slice(0,12)+"...":product.title}</h2>

                       <p><b>SubTotal</b>:
                       ${product.price}</p>
                       <p><b>Discount</b>:
                       {product.discountPercentage}%</p>
                       <p><b>Discount Amount</b>:
                       {(product.price*product.discountPercentage*0.01).toFixed(2)}%</p>
                       <p><b>Total</b>:
                       {(product.price-product.price*product.discountPercentage*0.01).toFixed(2)}</p>


                       <p>{product.description.length>15?product.description.slice(0,20)+"...":product.description}</p>
                    </CardBody>
                    <CardFooter>
         <Button variant="primary" className='me-2'>ViewDetails</Button>
         <Button variant="info"className='me-2'onClick={(e)=>editHandler(e,product.id)}>Edit</Button>
         <Button variant="danger" onClick={(e)=>deleteHandler(e,product.id)}>Delete</Button>
                </CardFooter>
                </Card>
  );
};
export default ProductList
