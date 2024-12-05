

// alert("If you interest to join ?")
// let age = prompt("Enter Your Age: ");
// age = Number.parseInt(age);
// alert("You entered the number of type: " + (typeof age))
// document.write(age)

let age = prompt("Enter Your age: ")
age = Number.parseInt(age)
const canDrive =(age)=>{
    return age>=18?true:false
}
if(canDrive(age)){
    alert("Yes you can Drive.")
}else{
    alert("You cannot Drive.")
}