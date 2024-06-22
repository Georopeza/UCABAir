const express = require ('express');
const morgan= require('morgan');
const cors= require('cors');
const taskRoutes = require('./routes/tasks.routes');
const app= express();
const {direccion}=require('./config')

const FRONTEND_URL=direccion.frontend
app.use(
    cors({
      origin: FRONTEND_URL
    })
  );
  
app.use(morgan('dev'))
app.use(express.json());
app.use(taskRoutes)
app.use((err,req,res,next) => {
    return res.json({
        message: err.message
    })
})
app.listen(4000)
console.log('Servidor en el puerto 4000')