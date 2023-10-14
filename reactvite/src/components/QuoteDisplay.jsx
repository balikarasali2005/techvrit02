import React, { useState } from 'react'
import {Button,Card,CardBody,CardFooter,CardHeader} from "react-bootstrap";
import axios from "axios";

const QuoteDisplay = () => {
    const [id, setId]=useState(1);
    const [author, setAuthor]=useState("");
    const [quote, setQuote]=useState("");
    const toggleQuotes = async (e)=>{
        e.preventDefault();
        const { data } = await axios.get("https://dummyjson.com/quotes");
        const { quotes }= data;
        if(id > quotes.length){
           setId(1)
        }else{
            const qts = quotes.find((quote)=> quote.id === id);
            setAuthor(qts.author);
            setQuote(qts.quote);
                setId(id + 1);
        }
    };
    return (
        <Card>
          <CardHeader>
            <h1>Quote Display</h1>
          </CardHeader>
          <CardBody>
       <b>Author:{author}</b>
       <br/>
       <i>Quote:{quote}</i>
          </CardBody>
          <CardFooter>
            <Button variant="success" className="me-2" onClick={toggleQuotes}>
              Toggle
            </Button>
          </CardFooter>
        </Card>
      );
}
export default QuoteDisplay
