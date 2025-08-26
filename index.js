const express = require('express'); // import express

const app = express(); //panggil function express

app.listen(3000, () => {
    console.log(`server berhasil di runing di port 3000`);
}) // menandakan server sudah berjalan