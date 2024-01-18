// function first(callback){
//     console.log("first step taken")
//     callback()
// }
// function second(callback){setTimeout(()=>{
//     console.log("second step taken")
//     callback()
// },1000)
    
// }
// function third(){setTimeout(()=>{
//     console.log("third step taken")
// },1000)
// }
// //callback hell
// first(function(){second(function(){third()})})

//promises
// function first(){
//         return new Promise((resolve)=>{
//          console.log("first step taken")
//          resolve()
//         })
// }
// function second(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("second step taken")
//             resolve()
//         },1000)
//     })
// }
// function third(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("third step taken")
//             resolve()
//         },1000)
//     })
    
// }
// first()
// .then(()=>second())
// .then(()=>third())
// .catch((err)=>{console.log(err)})
//async await
async function first() {
    console.log("first step taken")
    
}

async function second() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("second step taken")
            resolve();
        }, 1000)
    });
}

async function third() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("third step taken")
            resolve();
        }, 1000)
    });
}

first().then(() => second())
.then(()=>third())