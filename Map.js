let arr = [12,14,1,15,34]

let a = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value+1;
})

console.log(a)