const students = [
    { id: 1, name: "Ankit", attendance: 90, score: 80 },
    { id: 2, name: "Ayush", attendance: 70, score: 90 },
]

function getStudent(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const found = students.find((std)=> std.id===id);
            if(found) res("Student Info")
            else rej("Not Found")
            // res(std)
            // const userObj = {
            //     name: "Ankit",
            //     email: "ankitkumarswe01@gmail.com",
            //     age: 20
            // }
            // res(userObj)
        }, 3000)
    })

}

function getAttendanceInfo(id) {
    return new Promise((res) => {
        setTimeout(() => {
            const attendance = students.find((std)=> std.id== id);
            if(attendance) {
                // console.log(attendance)
                res(attendance)
            }
            
            // console.log(students.id.attendance)
        }, 1000)
    })
}

function getExaminationInfo(id) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            const student = students.find((std) => std.id===id);
            if(student.score > 70){
                res("Pass")
            }
            else rej("fail")
            // res("Examination info resilved")
        }, 2000)
    })
}



// function displayStudent(user){
//     console.log(user.name);
// }

async function main() {
    try {
        const studentID = 1;
        // const result = await getStudent()  // after completed this then go to next line for one function
        const result = await Promise.all([            //for many function 
            getStudent(studentID),
            getAttendanceInfo(studentID),
            getExaminationInfo(studentID)
        ])



        // displayStudent(result[0])
        // result.foreach((a)=>{
        //     console.log(a)
        // })
        console.log(result)
        console.log("Program Completed Successfully")
    } catch (err) {
        console.log(err)
    }



}

main()
//getStudent should return object name, email and age
// file45.












