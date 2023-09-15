let promise = new Promise(function(resolve, reject) {
    console.log("1");
    resolve("a");
})

console.log("2");

setTimeout(()=>{
    console.log("3")
}, 2000);

console.log("4");

console.log(promise)