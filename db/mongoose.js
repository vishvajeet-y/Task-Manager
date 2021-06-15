const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/vyorius',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

},(err,client)=>{
    if(err){
        return console.log('Unable to connect with mongoose')
    }
    console.log('connected to mongoose')
})