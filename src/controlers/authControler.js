
const registerUser = (req,res) => {
    res.json({
        message: "Aca se registra"
    })
}

const loginUser = (req,res) => {
    res.json({
        message: "Aca se logea"
    })
}

export {
    registerUser,
    loginUser
}