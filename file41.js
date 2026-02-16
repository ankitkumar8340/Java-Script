function makePayment(f){
    return new Promise((resolve, reject)=>{

        // reject("Something went wrong")
        setTimeout(()=>{
            console.log("Payment has been recieved");
             resolve()
        }, 4000)

       
        // setTimeout(()=>{
        //     console.log("Payement has been processed");
        //     if(f) f();
        //     resolve();
        // }, 4000)
    })
}

function sendConfirmation(){
    setTimeout(()=>{
    console.log("Order has been placed successfully");
    }, 2000)
}


// makePayment(sendConfirmation)


makePayment()
    .then(()=> (
        sendConfirmation()
    ))
    .catch((err)=> console.log(err))


// makePayment()
//     .then(()=> {
//         return sendConfirmation()
//     })
//     .catch((err)=> console.log(err))
// sendConfirmation()













