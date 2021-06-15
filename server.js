require('./db/mongoose')
const express=require('express')
const bodyParser=require('body-parser')
const userRouter=require('./router/api/user')
const taskRouter=require('./router/api/task')
const app=express()
const port=process.env.PORT||5000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api/user',userRouter);
app.use('/api/task',taskRouter);

app.listen(port,()=>{
    console.log('Server is running on port ',port)
})