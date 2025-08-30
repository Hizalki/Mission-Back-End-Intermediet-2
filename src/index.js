const express = require('express'); // import express
const useRouters = require ('./routes/user') // import router user
const middlewareLogRequset = require('./middleware/logs') // import middleware log request

const app = express(); //panggil function express

app.use(middlewareLogRequset); // middleware global (untuk semua route)
app.use(express.json()); // middleware untuk parse request body

app.use("/users", useRouters) // middleware untuk route /users

app.listen(3000, () => {
    console.log(`server berhasil di runing di port 3000`);
}) // menandakan server sudah berjalan