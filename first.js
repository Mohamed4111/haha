const name ="mohamed"
if (name==="mohamed"){
  console.log("hello:"+name )
}
/* increment */
let likes = 5;
likes +=  1;
console.log(likes);

let isworking = true;

/* while loop */
while(isworking===true){
  console.log("hello everbody")
  isworking=false
}

let counter = 1;
while (counter<=10){
  console.log(counter)
  counter++
}


/*for loop */
for(let i=0;i<=5;i++){
  console.log("round:" +i)
}

//arrays
const fruits=["apple","banana","pineapple","watermelon"]
console.log(fruits)
fruits.push("grabs")
console.log(fruits)
fruits.pop()
console.log(fruits)
console.log(fruits.length)


//OBJECTS
const cat ={
  name: "loza",
  favoriteFood: "dry food"
};
console.log(cat.name)

//FUNCTIONS
function hello(name,lname){
console.log( name ,lname)
}
hello("mohamed","ahmed")


//JSON
const jsonString='{"story":"life","times":2,"fiction":true }';
console.log (jsonString)
console.log(JSON.parse(jsonString))