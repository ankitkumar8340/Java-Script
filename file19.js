//const products = ["product1", "product2", "product3"];
const products = [
  { id: 1, name: "Product 1", desc: "This is description", price: 100 },
  { id: 2, name: "Product 2", desc: "This is description", price: 120 },
  { id: 3, name: "Product 3", desc: "This is description", price: 150 },
];
// let cart = []
// products.forEach((product) => {
//     const obj = {
//         ...product,
//         quantity:1,
//     };
//     cart =[...cart,obj]
// })

// console.log(cart)


const cart = products.map((product)=>{
    const obj ={
        ...product,
        quantity:1,
        totalprice: product.price*2,
    };
    return obj
})
console.log(cart)

