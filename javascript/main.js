// && and ||
function getName(name){
    return name;
}

let a =false;
let b= true;
console.log(a&&b);// false
console.log(a&&getName("ashish")); // fasle

console.log(a ||getName("patel"))

// template literals

let name1 = "ashish"
let name2 ="patel"
console.log(name1+" "+name2, `${name1} ${name2}`);


// ternary operator
let showRec1 = false;
function getRecName(recipeName){
  return recipeName;
}

function getRecTwoName(recipeName){
  return recipeName;
}
if(showRec1){
    console.log(getRecName("pizza"));
} else{
    console.log(getRecTwoName("coke"))
}

// condition ? statement1: statement2
showRec1 ? console.log(getRecName("pizza")):console.log(getRecTwoName("coke"));



const id =1;
const productName = "defender";
const rating = 5;

const product={
  id,
  productName,
  rating
}
console.log(product);

const product2 ={
    description : "product 2 descritpion",
    id,
    productName,
    rating
}
// const getProdcutTwoDes = product2.description;
// console.log(getProdcutTwoDes)

const {description} = product2;
console.log(description);


const array =[1,2,3];
let getArrayFirstValue = array[0];
let getArraySecValue = array[1];
console.log(getArrayFirstValue,getArraySecValue);

const [arrayFirstele, arraySecEle,arrayThiEle,arrayFouEle] = array;
console.log(arrayFirstele, arraySecEle,arrayThiEle,arrayFouEle);


// default parameters spread and rest operators

function mulOfTwoNumbers(num1=1,num2=3){
    console.log(num1,num2);
    return num1*num2;
}
console.log(mulOfTwoNumbers(7,9));// OVERRIDE ==63


// merge the array
const array1 = [2,8,6];
const array2 =[2,5,1]
const array3 =[6,0,9]
console.log([...array1,...array2,909,...array3,504])

function getInfo(a,b,...c){
    console.log(a,b,c)
    return "ashish"
}
console.log(getInfo(1,2,3,45,5,3,3,3,4,1,4,5,6))




//map filter find some every included indexOf findIndex
const personsArray =[
    {
        name:'person 01',
        age:20,
        country:"usa"
    },
    {
        name:'person 02',
        age:40,
        country:"dubai"
    },
    {
        name:'person 03',
        age:50,
        country:"india"
    },
];

let getAllNames =personsArray.map((singlePerson,index) =>{
    console.log(singlePerson,index)
    return `${singlePerson.name} age is ${singlePerson.age}`;
});
console.log(getAllNames)


let getPersonFromUSA = personsArray.find((singlePerson,index) =>{
    return singlePerson.country==="usa";
})
console.log(getPersonFromUSA);



let checkSomeArrayMethodWithExample = personsArray.some((singlePerson,index)=>{
    return singlePerson.age>25
});
console.log(checkSomeArrayMethodWithExample)

const fruitsArray =['apple','grapes','orange']
console.log(fruitsArray.includes("apple"),fruitsArray.indexOf('apple'))// true ,0


let getIndexOfPersonRussia = personsArray.findIndex(singlePerson=>{
  return  singlePerson.country==="usa"
});
console.log(getIndexOfPersonRussia);




let getListOfProductsElement =document.querySelector('list-of-products')

function renderProducts(getProducts){
    getListOfproductsElement.innerHTML =getProducts.map(singleProductItem =>{
        '<p${singleProductItem.title}</p>'
    }).join(" ");
}

async function fetchListOfProducts(){
    try{
        const apiResponse = await fetch('https://dummyjson.com/products',{
            method : 'GET'
        })
        const result = await apiResponse.json()
        console.log(result);

        if(result?.products?.length >0) renderProducts(result?.products)
    }catch(e){
      console.log(e);
    }

}


fetchListOfProducts();