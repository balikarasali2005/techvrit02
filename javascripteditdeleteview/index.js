const body=document.body;

const main=document.createElement('div')
main.className="container d-flex flex-wrap justify-content-between gap-5";
main.id="container";

// Header
const headerTag=document.createElement('h3')
headerTag.innerText="Our team"
headerTag.className='text-center'
document.body.append(headerTag)

// Paragraph
const para=document.createElement('p')
para.innerText="Welcome to our beautiful products"
para.className='text-center'
document.body.append(para)


fetch('https://dummyjson.com/products', {
   method: "GET"
}).then((resp) => {
   return resp.json();
}).then((value) => {
   console.log(value)
   value.products.forEach((product) => {
// Card
const card=document.createElement('div')
card.className="card";
card.style.width='30%'
card.style.height = "500px"


// Card head
const cardHead=document.createElement('div')
cardHead.className='card-header h-75'
// cardHead.innerHTML="<h4>Item no<h4><br>"


// image
const img=document.createElement('img')
img.className='card-img h-100'
img.src=product.thumbnail

cardHead.append(img)
card.append(cardHead)

// card-Body
const cardBody=document.createElement('div')
cardBody.className="card-body"
cardBody.style.textAlign='center'


const h4=document.createElement('h4')
h4.className='text-center'
h4.innerText=product.brand
cardBody.append(h4)


const par=document.createElement('p')
par.innerText=product.category
par.className='text-secondary text-center'
cardBody.append(par)

const butt=document.createElement('button')
butt.innerText='Buy'
butt.className='btn btn-outline-success'
cardBody.append(butt)

card.append(cardBody)
main.append(card)
})
})

body.append(main)