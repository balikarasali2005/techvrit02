const currDate = new Date();
const calculateCurrentYear=(data)=>{
const currYear = date.getFullYear();
return currYear
};
const d = calculateCurrentYear(currDate);
document.write(`copyright @company_name ${d}`);
document.write(`copyright @company_name ${currDate}`);
// calculateCurrentYear();

// 2023-8-19
const dateFormatter = (date)=>{

    const currYear = date.getFullYear();
    const currMonth = date.getMonth();  
    const currDate = date.getDate();
    const formatterDate =`${currYear}-${currMonth + 1}-${currDate}`
    return formatterDate;
}
const f=dateFormatter(currDate);
console.log(`${f}`);    
// ECMAscript-ES=>how to right code like snytax,standard
// var ,let ,const
// var(function scope) let(block scope) vs const(block scope)
// hoisting=>top of scope declaration

// higher order array methods - foreach,map,filter,reduce
const array = [
    {
      id: 1,
      productName: "Phone",
      description: "loremloremlorem",
      price: 1000,
      currency: "USD",
      address: {
        city: "Washington",
        postalCode: 2000,
      },
      discountPercent: 20,
      rating: 3,
    },
    {
      id: 2,
      productName: "Phone2",
      description: "loremloremlorem",
      price: 10000,
      currency: "MXN",
      address: {
        city: "Mexico",
        postalCode: 3000,
      },
      discountPercent: 30,
      rating: 4,
    },
    {
      id: 3,
      productName: "Phone3",
      description: "loremloremlorem",
      price: 15000,
      currency: "NPR",
      address: {
        city: "Kathmandu",
        postalCode: 44600,
      },
      discountPercent: 70,
      rating: 1,
    },
    {
      id: 4,
      productName: "Phone4",
      description: "loremloremlorem",
      price: 1000,
      currency: "MXN",
      address: {
        city: "Mexico",
        postalCode: 1000,
      },
      discountPercent: 20,
      rating: 2,
    },
    {
      id: 5,
      productName: "Phone5",
      description: "loremloremlorem",
      price: 50000,
      currency: "NPR",
      address: {
        city: "Pokhara",
        postalCode: 10000,
      },
      discountPercent: 245,
      rating: 4,
    },
    {
      id: 6,
      productName: "Phone6",
      description: "loremloremlorem",
      price: 1000,
      currency: "USD",
      address: {
        city: "Washington",
        postalCode: 1000,
      },
      discountPercent: 65,
      rating: 4.6,
    },
  ];
// filter
const numbers=[1,2,3,4,5,6];
const filterMethod = numbers.filter((num)=>{
    if(num>numbers){
        return true;
        // return num>50;
    }
})