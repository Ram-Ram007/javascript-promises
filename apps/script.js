const tickectBook = new Promise((resolve,reject) => {
    let bookingSuccess = true
    if(bookingSuccess)
    
        resolve()
    
    else
    
        reject()
    
})

tickectBook.then(()=>console.log("Successfully booked tickect"))//then is used for the resolve
.catch(() =>console.log("failed to book tickects"))//catch is used for the reject.

