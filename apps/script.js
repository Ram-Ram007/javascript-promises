const tickectBook = new Promise((resolve,reject) => {
    let bookingSuccess = true
    if(bookingSuccess)
    
        resolve(800)
    
    else
    
        reject()
    
})

tickectBook.then((amount)=>console.log(`Successfully booked tickect and recived ${amount}`))//then is used for the resolve
.catch(() =>console.log("failed to book tickects"))//catch is used for the reject.


function cointoss(){
    return new Promise((resolve,reject)=>{
    const ran = Math.floor(Math.random()*2)
    if(ran==0)
    resolve()
else
reject()

})
}

cointoss()
.then(()=>console.log("hey your win"))
.catch(()=>console.log("sorry your loose"))