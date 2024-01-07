const jwt = require("jsonwebtoken");

// Function to generate a token
const generateToken = (payload, res) => {
  const secretKey = process.env.JWT_SECRET; // Replace with a strong secret key

  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" }); // Adjust expiration as needed

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    expires: new Date(Date.now() + 3600000),
  });

  return token;
};

module.exports = generateToken;
