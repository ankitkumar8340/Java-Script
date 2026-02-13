
// function add(){
//     // console.log(a)
//     // console.log(b)
//     console.log(arguments)
//     console.log(arguments.length)
//     console.log(arguments[0])
// }

// add(3,4, 7, 8)


// function add(...arr){
    // console.log(a)
    // console.log(b)
    // console.log(arguments)
    // console.log(arguments.length)
    // console.log(arguments[0])
    // console.log(arr)

    // let sum =0;
    // for(let i =0; i<arr.length;i++){
    //     sum+=arr[i];
    // }
    // let sum = arr.reduce((total, num) => total + num, 0);
    // return sum;

// }


    const sum = (...args) =>{
        let sum = args.reduce((total, num) => total + num, 0)
        // console.log(args)
        return sum;
    }


const result = sum(3,4, 7, 8)
console.log(result)



























