// DOM munipulation
// 5 methods
// // 1.get element by id 
// const text1=
// document.getElementById("text-1");
// text1.className="text-center"
// text1.innerText="hey whats up"
// text1.style.backgroundColor="black"
// text1.style.color="white"
// console.log(text1);

// const text2 = document.getElementById("text2");
// text2.innerHTML="<strong>balika</strong>"


// //2. get element by class name
// const texts=document.getElementByClassName("text2");
// for(let i=0;i<text2.length;i++){
//     texts[i].style.color="green"
// }
// console.log(texts[0]);
// text2[0].style.color="blue"
// console.log(texts[1]);

// // 3.get element by tag name
// const tags = document.getElementByTagName("h2")
// for(let i=0;i<texts.length;i++){
//     tags[i].style.color="white"
//     tags[i].style.backgroundColor="black"
// }
// console.log(tags)

// // 4.query selector
// const te = document.querySelector("#text-1")
// const te2 = document.querySelector("#text2");

// //5. query selectorAll
// const te3 = document.querySelectorAll("h2");


// const input = document.getElementById("input")
// const input1 = document.querySelector("#input")
// const input2 = document.querySelectorAll("input")
// console.log(input.value);
// input.value="hey@gmail.com"

// create Element

const button = document.createElement('button');
button.innerText = "Submit";
button.className = "btn btn-outline-primary"
button.id = "unique-btn"

const container = document.getElementById("container");
container.append(button);

const cancelButton = document.createElement('button');
cancelButton.innerText = "Cancel"
cancelButton.className = "btn btn-danger";

container.append(cancelButton);

const breakTag = document.createElement("br");
container.append(breakTag);

const h3 = document.createElement("h3");
h3.innerText = "loremloremlorem";
h3.style.color = "blue";
h3.style.marginTop = "35px";
h3.style.margin = "35px";

container.append(h3);


const ul = document.createElement("ul");
ul.className = "list-group";

const li1 = document.createElement('li');
li1.className = "list-group-item";
li1.innerText = "An Item"

ul.appendChild(li1);
const li2 = document.createElement('li');
li2.className = "list-group-item";
li2.innerText = "An Item 2"

ul.appendChild(li2);
const li3 = document.createElement('li');
li3.className = "list-group-item";
li3.innerText = "An Item 3"

ul.appendChild(li3);

const li4 = document.createElement('li');
li4.className = "list-group-item";
li4.innerText = "An Item 4"

ul.appendChild(li4);

Image.src = "https://abc.com?jpg"


container.append(ul)





const card = document.createElement('div')
card.className = "card";
card.style.width = "18rem";

const image = document.createElement("img");
image.src = "https://images.unsplash.com/photo-1695112174922-f5aee549bc9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
image.className = "card-img-top"

card.append(image);

const cardBody = document.createElement('div')
cardBody.className = "card-body";

const h5 = document.createElement('h5')
h5.className = "card-title";
h5.innerHTML = "Card Title"

cardBody.append(h5);

const p = document.createElement('p')
p.className = "card-text";
p.innerHTML = "Card p tag"

cardBody.append(p);

const anc = document.createElement('a')
anc.className = "btn btn-primary";
anc.innerHTML = "Go somewhere"

cardBody.append(anc);

card.append(cardBody);

document.body.append(card)