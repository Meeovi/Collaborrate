/* eslint-disable require-await */
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
// Function to hash users password
const hash = async (password) => {
// Generate salt
const salt = await bcrypt.genSalt(10);
// Hash the password
password = await bcrypt.hash(password, salt);
return password;
};
// Function to compare hashed password's
const compare = async (hash, pass) => {
return bcrypt.compare(hash, pass);
};
// Function to generate tokens
const generateToken = (id) => {
return jwt.sign({ id }, process.env.JWT_SECRET, {
expiresIn: process.env.JWT_EXPIRE
});
};
module.exports = {
hash,
compare,
generateToken
};