const { PrismaService } = require('feathers-prisma');

exports.Users = class Users extends PrismaService {
  constructor({ model, ...options }, app) {
    super({
      model,
      ...options,
    }, app.get('prisma'));
  }
};
