



const products = [
  {
    id: 1,
    name: "Product 1",
    desc: "This is description",
    price: 100,
    category: "Laptop",
  },
  {
    id: 2,
    name: "Product 2",
    desc: "This is description",
    price: 120,
    category: "Desktop",
  },
  {
    id: 3,
    name: "Product 3",
    desc: "This is description",
    price: 150,
    category: "Laptop",
  },
  {
    id: 4,
    name: "Product 4",
    desc: "This is description",
    price: 100,
    category: "Laptop",
  },
  {
    id: 5,
    name: "Product 5",
    desc: "This is description",
    price: 120,
    category: "Desktop",
  },
  {
    id: 6,
    name: "Product 6",
    desc: "This is description",
    price: 150,
    category: "Laptop",
  },
];

let qty=1;
const cart = []
function addToCart(id){
    const product = products.find((product) => product.id===id)
    
    if(product){
        // cart.push(product);
        cart.push({...product, qty:1});
    }
   
}
function increment(id){
    const product = products.find((product)=>(
        product.id===id
    ))
    cart.push({...product, qty:qty+1})
}


addToCart(1)
addToCart(3)
addToCart(5)
console.log(cart)
increment(1)
increment(4)
console.log(cart)






