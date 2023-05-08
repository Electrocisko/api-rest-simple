import { Users } from "../models/UserModel.js";
import { nanoid } from "nanoid";

const registerForm = (req, res) => {
  res.render("register");
};

const registerUser = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;
    const exist = await Users.findOne({ userEmail: userEmail });

    if (exist) throw new Error("User already exist");

    const user = new Users({
      userName,
      userEmail,
      userPassword,
      tokenConfirm: nanoid(),
    });
    await user.save();

    // FALTA logica de enviar correo electronico a la cuenta para confirmar

    //Lo mando a login
    res.redirect("/auth/login");
  } catch (error) {
    res.json({
      status: "error",
      error: error.message,
    });
  }
};

const loginForm = (req, res) => {
  res.render("login");
};

const checkCount = async (req, res) => {
  const { token } = req.params;
  try {
    const user = await Users.findOne({ tokenConfirm: token });
    if (!user) throw new Error("User no exist");
    user.countConfirmed = true;
    user.tokenConfirm = null;
    // redirecciono a logi si todo esta ok
    await user.save();
    res.redirect("/auth/login");
  } catch (error) {
    res.json({
      status: "error",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { userEmail, userPassword } = req.body;
  try {
    const user = await Users.findOne({userEmail: userEmail});
   if (!user) throw new Error('User not exist');
   if (!user.countConfirmed) throw new Error('User count not confirmed');

   if(!await user.validatePassword(userPassword)) throw new Error('User password wrong');

res.redirect('/')
  } catch (error) {
    res.json({
      status: "error",
      error: error.message,
    });
  }
};

export { registerUser, loginForm, registerForm, checkCount, loginUser };
