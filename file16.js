let cart =[]

//click on add to card button  on iphone product

cart = [...cart, {name: "iphone", price:44000, qty:1}]
// console.log(cart)

cart = [...cart, {name:"Speaker", price:4400, qty:2}]
console.log(cart)


const order ={
    email:"john@gmail.com",
    items:cart,
    orderValue:48400,
    status:"pending"
}

//db.orders.insertOne(order)














