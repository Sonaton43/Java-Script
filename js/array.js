let mark = [44, 55, 66, 77, "Not Present"]
let n
for(n = 0; n< mark.length; n++){
    console.log(mark[n])
}
for(let f of mark){
    console.log(f)
}
mark.forEach((element)=>{
    console.log(element*element)
});
//Array Merge
let a = [1, 2, 3, 4]
let b = [11, 12, 13, 14]
let c = [21, 22, 23, 24]
let all = a.concat(b,c)
console.log(all)