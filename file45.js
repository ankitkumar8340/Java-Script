
function getStudent(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            const userObj = {
                name:"Ankit",
                email:"ankitkumarswe01@gmail.com",
                age: 20
            }
            res(userObj)
        }, 3000)
    })

}

function getAttendanceInfo(){
    
}

function displayStudent(user){
    console.log(user.name);
}

async function main(){
    const result = await getStudent()
    displayStudent(result)
    console.log(result)
    console.log("Program Completed Successfully")


}

main()
//getStudent should return object name, email and age
// file45.











