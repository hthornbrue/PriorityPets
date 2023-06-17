import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models";

const router = express.Router();

router.route("/").get((req, res, next) => {
  res.send("auth endpoint");
});

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!password || !username || !email) {
    return res.status(422).json({ error: "please add all the fields" });
  }

  const symbolCheck = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const uppercaseCheck = /[A-Z]/;

  if (!symbolCheck.test(password)) {
    return res
      .status(400)
      .json({ error: "password must contain at least one symbol (e.g., ?!@#$%^&*)" });
  }

  if (!uppercaseCheck.test(password)) {
    return res
      .status(400)
      .json({ error: "password must contain at least one uppercase letter" });
  }

  if (password.length < 8 || password.length > 20) {
    return res
      .status(400)
      .json({ error: "password length must be between 8 and 20 characters" });
  }

  try {
    const savedUser = await User.findOne({ username: username });

    if (savedUser) {
      return res
        .status(422)
        .json({ error: "user already exists with that name" });
    }

    const hashedpassword = await bcrypt.hash(password, 12);

    const user = new User({
      username,
      email,
      password: hashedpassword,
    });

    const newUser = await user.save();
    res.json({ message: "saved successfully", user: newUser });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error occurred while signing up" });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "missing email or password" });
  }

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({
        error: "Invalid email",
      });
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      return res.status(401).json({
        error: "Invalid password",
      });
    }

    const userForToken = {
      username: user.username,
      id: user._id,
    };

    const token = jwt.sign(userForToken, process.env.JWT_SECRET);
    res.status(200).send({ token, username: user.username, uid: user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error occurred while signing in" });
  }
});

module.exports = router;