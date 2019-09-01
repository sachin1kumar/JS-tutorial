const data = ["Hey buddy","Hello","Hi"]

const search = function(data,input){
    const returnedIndex = data.findIndex(function(input){
        return data == input
    })
    
    console.log(data[returnedIndex])

    return data[returnedIndex]
}

search(data,"Hi")