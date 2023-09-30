const tickectBook = new Promise((resolve,reject) => {
    let bookingSuccess = true
    if(bookingSuccess)
    
        resolve()
    
    else
    
        reject()
    
})

tickectBook.then(sucess)//then is used for the resolve
.catch(failure)//catch is used for the reject.

function sucess(){
    console.log("your tickect booked successvully")
}

function failure(){
    console.log("failed to book tickect")
}