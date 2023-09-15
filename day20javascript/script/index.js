// map forEach filter=>higher order array methods
const num = [10, 30, 50, 40];
 const a=  num.forEach(function (val){
    if(val % 2 ===0){
        console.log(val,"even");
    }
})
console.log(a);

const b=  num.map(function (val){
    if(val % 2 ===0){
        return `value is even:${val}`;
    }else{
        return `value is odd:${val}`;
    }
});
console.log(b);

const backendResp = [
    {
        firstName: "abc",
        lastName:"def"
    },
    {
        firstName: "test",
        lastName:"def"
    },
];
// fullname :"abc def"
const newData = backendResp.map((val)=>{
    return {fullName :`${val.firstName} ${val.lastName}`}
});
console.log(newData);
const newData1 = backendResp.filter((val)=>{
   return val.firstName ==="abc";
}).map((value)=>{
    return {};
});
console.log(newData1);
    

      fetch("https://dummyjson.com/products", {
        method: "GET",
      })
        .then((val) => {
          return val.json();
        })
        .then((val) => {
          const filteredProds = val.products.filter((item) => {
            return item.category === "smartphones";
          });
          console.log(filteredProds);
        });

      console.log("I am here");

// callback and promises
// HTTP METHODS : GET POST PUT/PATCH DELETE
fetch("https://dummyjson.com/products",{
    method:"GET",
}).then((val)=>{
    console.log(val);
})
console.log("i am here");

