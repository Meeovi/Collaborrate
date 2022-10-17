import argon2id = require('argon2');
import { NextFunction, Request, Response } from 'express';
import passport = require('passport');
import { Strategy } from 'passport-local';
import { User } from '../middleware/users';
import prisma from 'prisma';

/**
 * Authentication strategy (Username & Password)
 * Since we are using email and password we have to rename the username field to what we use.
 * Attempts to find a user in the db, will approve or reject based on user found and if password matches or not.
 * Hashed using Argon2ID
 */
passport.use(
  new Strategy({ usernameField: 'email' }, async (email, password, done) => {
    const user = await prisma.user.findUnique({ where: { email } });
    const response = 'Invalid login credentials';

    if (!user) return done(response);
    else if (user) {
      const passMatch = await argon2id.verify(user.password, password);

      if (passMatch) return done(null, user);

      return done(response);
    }
  }),
);

/**
 * Serializes the user, called after login is approved.
 * accesses the user object, resulting in data attached to the session. (Request.session.user)
 */
passport.serializeUser((user, done) => {
  done(null, (user as User).id);
});

/**
 * Deserialize the user, on every session request through the used passport strategy. (Local / email & password)
 */
passport.deserializeUser(async (id: string | number, done) => {
  const user = await prisma.user.findUnique({ where: { id: parseInt(id.toString()) } });
  if (!user) return done('No user to deserialize');

  return done(null, user);
});

/**
 * Login Required middleware.
 * NOTE Consider showing either an error, or simply redirect the user to log in page
 */
export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) return next();

  // Consider showing either an error, or simply redirect the user to log in page
  // res.status(401).json('You must be logged in to do this.');
  res.status(401).redirect('/login');
};