let users = [
    {
        id: 1,
        email: "sumayyah@gmail.com",
        password: "123456"
    },
    {
        id: 2,
        email: "john@gmail.com",
        password: "abcdef"
    }
];


// GET all users
const getUsers = (req, res) => {
    res.status(200).json({
        success: true,
        count: users.length,
        users
    });
};


// GET one user
const getUserById = (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    res.status(200).json({
        success: true,
        user
    });
};


// CREATE user
const createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        email: req.body.email,
        password: req.body.password
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        user: newUser
    });
};


// UPDATE user
const updateUser = (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    user.email = req.body.email ?? user.email;
    user.password = req.body.password ?? user.password;

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        user
    });
};


// DELETE user
const deleteUser = (req, res) => {
    const id = Number(req.params.id);

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const deletedUser = users.splice(userIndex, 1);

    res.status(200).json({
        success: true,
        message: "User deleted successfully",
        user: deletedUser[0]
    });
};


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};