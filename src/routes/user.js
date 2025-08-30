const express = require('express'); // import express
const  UserController = require('../controller/user') // import controller user
const router = express.Router(); // buat rauter

// CREAT - POST 
router.post("/", UserController.createNewUser);

// READ - GET
router.get("/", UserController.getAllUsers); 

// UPDATE - PATCH
router.patch("/:idUser", UserController.updateUser);

// DELETE - DELETE
router.delete("/:idUser", UserController.deleteUser);

module.exports = router; // export router

