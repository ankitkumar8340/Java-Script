



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
    const product = cart.find((product)=>(
        product.id===id
    ))
    product.qty++;
    // cart.push({qty:qty+1})
}

function placeOrder(){

    let totalOrderValue = 0;

    for(let i = 0; i < cart.length; i++){
        totalOrderValue += cart[i].price * cart[i].qty;
    }

    const order ={
        order_id: Date.now(),
        email: "john@gmail.com",
        orderValue: totalOrderValue,
        items: cart
    }
    console.log("Order placed successfully")
    // console.log(order)
    console.log(order.order_id, order.email, order.orderValue)
    order.items.forEach((or)=>{
        console.log(`Order_id: ${or.id} name: ${or.name} description: ${or.desc} price: ${or.price} category: ${or.category} qty: ${or.qty}`)
    })
    console.log("product total", totalOrderValue)
    console.log("total order placed ", totalOrderValue)
    // return order
    


}
// console.log("Flipkart")
//     products.forEach((product)=>{
//         console.log(`Product id: ${product.id} - Product name: ${product.name} Product description ${product.desc} - Product Price: ${product.price}`)

//     })


addToCart(1)
addToCart(3)
addToCart(4)
// console.log(cart)
increment(1)
increment(4)
// console.log(cart)

placeOrder()

// const order = {
//     email:"john@gmail.com",
//     items:cart,
//     orderValue
// }







