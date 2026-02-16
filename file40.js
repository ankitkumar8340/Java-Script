//promises

function makePayment(){
    setTimeout(()=>{
    console.log("Payement has been processed");
    }, 4000)
}

function sendConfirmation(){
    setTimeout(()=>{
    console.log("Order has been placed successfully");
    })
}


makePayment()
sendConfirmation()

// setTimeout(()=> {console.log("Hello")}, 4000) //take 4 sec to run

// function f1(){
//     setTimeout(()=>{
//         console.log("Hello ");
//     }, 3000)
// }
// f1()






























