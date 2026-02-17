
function p1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("P1 success")
        },1000)
    })
}

function p2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej("P2 Fail")
        },2000)
    })
}

function p3(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("P3 success")
        },1000)
    })
}

async function main(){
    try{
        // const result = await Promise.all([p1(),p2(),p3()])
        // const result = await Promise.any([p1(),p2(),p3()])  //first success show
        // const result = await Promise.race([p1(),p2(),p3()])  //first success show
        const result = await Promise.allSettled([p1(),p2(),p3()])  //first success show

        console.log(result)
    }

    catch(err){
        console.log(err)
    }
}
main()



