
const url = "https://jsonplaceholder.typicode.com/users";

async function fetchData(){
const response = await fetch(url)
const result = await response.json()     //promise pending that is why we use await means for comming data some time is taking so for that time the await will make sure the function will wait
console.log(result)

}
fetchData()



