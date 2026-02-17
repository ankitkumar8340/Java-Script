function f1(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("This is F1 function")
            if(num % 2 === 0 ){
                resolve(num + " is and even number ")
            }
            else{
                reject("Odd Number is not allowed");
            }
            resolve()
        }, 3000)
    })
}

function f2(){
    console.log("this is f2 function")
}

// f1()
// f2()

// f1().then(()=> f2())
// .catch((err) => console.log(err))

async function main(){    
    let num = Math.round(Math.random()*10);
    try{  
    const a = await f1(num)     //await means first f1 run and complete then f2 run 
    console.log(a);
    console.log("Program Completed successfully")
    }
    catch(err){
        console.log(err);
    }
}

main()














