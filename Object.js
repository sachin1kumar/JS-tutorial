let mydata = {
    title: 'Data',
    rank: 12,
    description: 'this is the meta data',

    summary: function(){
        console.log(this.title)
    },

    modifyDetails: function(newTitle){
        this.title = newTitle
    }
}

console.log(mydata)
mydata.summary()
mydata.modifyDetails('test')
mydata.summary()