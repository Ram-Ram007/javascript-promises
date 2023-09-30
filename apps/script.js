// // const tickectBook = new Promise((resolve,reject) => {
// //     let bookingSuccess = true
// //     if(bookingSuccess)

// //         resolve(800)

// //     else

// //         reject()

// // })

// // tickectBook.then((amount)=>console.log(`Successfully booked tickect and recived ${amount}`))//then is used for the resolve
// // .catch(() =>console.log("failed to book tickects"))//catch is used for the reject.

// // function cointoss(){
// //     return new Promise((resolve,reject)=>{
// //     const ran = Math.floor(Math.random()*2)
// //     if(ran==0)
// //     resolve()
// // else
// // reject()

// // })
// // }

// // cointoss()
// // .then(()=>console.log("hey your win"))
// // .catch(()=>console.log("sorry your loose"))

let reachA = new Promise((resolve, reject) => {
  const reached = false;
  if (reached) setTimeout(resolve, 3000, "ram reached home");
  else reject("ram not reached home");
});

// let reachB = new Promise((resolve,reject)=>{
//     const reached = true
//     if(reached)
//     setTimeout(resolve,2000,"kabi reached home")
//     else
//     reject("kabi not reached home")

// })

// let reachC = new Promise((resolve,reject)=>{
//     const reached = true
//     if(reached)
//     setTimeout(resolve,1000,"lakshmi reached home")
//     else
//     reject("laksmi not reach the home")
// })

// Promise.all([reachA,reachB,reachC])
// .then((message)=>{
//     console.log(message)
// })
// .catch((message)=>{
//     console.log(message)
// })
// //basically promise are in the three states 1=>pending 2=>resolve 3=>reject

// Promise.allSettled([reachA,reachB,reachC])
// .then((message)=>{
//     console.log(message)
// })
// .catch((message)=>{
//     console.log(message)
// })

// Promise.any([reachA,reachB,reachC])
// .then((message)=>{
//     console.log(message)
// })
// .catch((message)=>{
//     console.log(message)
// })

// //its shows first setteled one

// Promise.race([reachA,reachB,reachC])
// .then((message)=>{
//     console.log(message)
// })
// .catch((message)=>{
//     console.log(message)
// })

//async always returns a promise
async function fn() {
  return "ram";
}
// console.log(fn())

// fn().then((msg)=> console.log(msg))

async function statuss() {
  try {
    console.log("test");
    let res = await reachA;
    console.log(res);
    console.log("bye");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("end");
  }
}
statuss();
