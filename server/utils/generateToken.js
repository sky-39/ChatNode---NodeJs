import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // days * hrs * mins * secs * milisecs
    httpOnly: true, // prevent XSS attacks also known as cross site scripting attacks
    sameSite: "strict", // CSRF attacks or cross-site forgery attack requests
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
