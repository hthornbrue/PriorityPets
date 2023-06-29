import jwt from "jsonwebtoken";
import keys from "../config/keys";
import User from "../models/user";

export default async function requireAuth(req, res, next) {
  const authHeader = req.get("authorization");
  if (!authHeader) return res.status(401).json({ message: "Unauthorized error" });

  const accessToken = authHeader.replace("Bearer ", "");

  jwt.verify(accessToken, keys.auth.accessTokenSecret, (err, payload) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!payload.sub) return next(err);

    User.findeOne({ email: payload.sub });
  });
}
