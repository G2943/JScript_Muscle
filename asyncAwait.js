async function reva(){
    let puneW = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("pune 24")
        }, 2000)
    })

    let mumW = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Mumbai 32")
        }, 5000)
    })

    console.log("pune");
    let pune = await puneW;
    console.log(pune);
    console.log("mumbai");
    let mumbai = await mumW;
    console.log(mumbai);

    // return[pune, mumbai];



}

let checkWeather = reva();
