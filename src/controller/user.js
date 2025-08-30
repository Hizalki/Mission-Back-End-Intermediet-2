const getAllUsers = (req, res) => {
    const data = {
        name: "John Doe",
        email: "john.doe@example.com",
        address: "123 Main St"
    } // dummy data yang nanti di ganti menjadi data dari database
    res.json({
        message: "GET all users success",
        data: data
    });
};

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: "POST create user success",
        data: req.body // data user yang baru dibuat
    });
};

const updateUser = (req, res) => {
    const { idUser } = req.params;
    console.log('idUser:', idUser);
    res.json({
        message: `PATCH update user with ${idUser} success`,
        data: req.body // data user yang di update
    })
};

const deleteUser = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser:', idUser);
    res.json({
        message: `DELETE user with ${idUser} success`,
        data: {
            id: idUser,
            name: "Hizalki",
            email: "hizalki@example.com"
        }
    })
};




module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};
