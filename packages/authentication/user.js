const { PrismaClient } = require('@prisma/client')
// connect to database
const prisma = new PrismaClient()
// Create Model
const Schema = prisma.Schema;

const users = new Schema({
  username: String,
  email: String,
  password: String
});

// Export Model
users.plugin(PrismaClient);

module.exports = prisma.model('userData', users, 'userData');